args <- commandArgs(trailingOnly = TRUE)
filePath<-args[1]

library("gridGraphics")
library(ggplot2)
library(ggeasy)
library(jsonlite)
library(patchwork)
library(dplyr) 

json_data <- fromJSON(filePath)
nameArr<-json_data$GutBiome$name
percentArr<-json_data$GutBiome$percentage
Phylum2<-paste(nameArr, percentArr, sep = " ")
PhylumArr<-rep(Phylum2, times = length(Phylum2))
percentArrRemove<-as.numeric(unlist(strsplit(percentArr,"%")))
dfPercentArr<-c()

for (i in 1: length(percentArrRemove))
{
  for (j in 1: length(percentArrRemove))
  {
    if(j > length(percentArrRemove) - i +1){
        dfPercentArr<-c(dfPercentArr,0)

      }else{
        dfPercentArr<-c(dfPercentArr,percentArrRemove[j])

      }
  }
}

df = data.frame(subject <- c('A','A','A','A','A','A','A','A',
                            'B','B','B','B','B','B','B','B',
                            'C','C','C','C','C','C','C','C',
                            'D','D','D','D','D','D','D','D',
                            'E','E','E','E','E','E','E','E',
                            'F','F','F','F','F','F','F','F',
                            'G','G','G','G','G','G','G','G',
                            'H','H','H','H','H','H','H','H'),
                Phylum <- PhylumArr,
                value <- dfPercentArr
                )
  
df$subject <- factor(df$subject) # converts to a categorical variable
df$Phylum <- factor(df$Phylum) # converts to a categorical variable


revPhylum<- rev(Phylum2)
color <- c("darkgray", "chocolate1","darkolivegreen3", "deepskyblue3","violet", "darkslategray3","deeppink3", "gray0")
revColor <- rev(color)
  
circlePlot<-ggplot(df, aes(x = subject, y = value, fill = factor(Phylum, levels=revPhylum))) +
  theme_void() +
  geom_col() + scale_x_discrete(limits = c("A", "B","C","D","E","F","G","H"))  +
  scale_fill_manual(values = revColor) +
  labs(fill='Phylum') +
  theme(legend.key.size = unit(1, 'cm'),legend.title = element_text(size=24),legend.text = element_text(size=16)) +
  guides(fill = guide_legend(reverse = TRUE)) +
  coord_polar("y") 


# ----------------------

pie_nameArr<-json_data$GutBiome$name
pie_percentArr<-json_data$GutBiome$percentage
pie_Phylum<-paste(pie_nameArr, pie_percentArr, sep = " ")
pie_percentArrRemove<-as.numeric(unlist(strsplit(pie_percentArr,"%")))
newPie_nameArr<-c()
newPie_Phylum<-c()
newPie_percentArr<-c()

for (i in 1: length(pie_percentArrRemove)) {
  if(pie_percentArrRemove[i] <= 2 && pie_percentArrRemove[i] > 0){
    if(length(newPie_percentArr)>0){
      newPie_percentArr<-c(newPie_percentArr,pie_percentArrRemove[i])
      newPie_Phylum<-c(newPie_Phylum,pie_Phylum[i])
    }else{
      newPie_percentArr<-pie_percentArrRemove[i]
      newPie_Phylum<-pie_Phylum[i]
    }
    
  }
}

if(length(newPie_percentArr)==0){
  ggsave("/Users/chuanfang/chuanfang/Website/microbiome-report-api/SixCorepIndicesPlots_new/12_test.png",width = 12, height = 5, dpi = 300)
}else{
  df2 = data.frame(group=newPie_Phylum, value=newPie_percentArr)

  pieRevPhylum<- rev(newPie_Phylum)

  df2 <- df2 %>% 
    mutate(prop = value / sum(df2$value) *100) %>%
    mutate(ypos = cumsum(prop)- 0.5*prop )

  pieColor <- c("tan3","tan1","salmon2","tan","wheat","mistyrose")

  piePlot<-ggplot(df2, aes(x="", y=prop, fill = factor(group, levels=revPhylum))) +
    theme_void() +
    geom_bar(stat="identity", width=1,color="white") +
    scale_fill_manual(values = pieColor) +
    geom_text(aes(x=1.2, y = ypos, label = group), color = "black", size=4) +
    theme(legend.position = "none") +
    coord_polar("y", start=0) +
    theme(plot.margin = unit(c(1,1,1,1),"cm"))

  circlePlot + piePlot + plot_layout(ncol = 2, widths = c(3, 2))
  ggsave("/Users/chuanfang/chuanfang/Website/microbiome-report-api/SixCorepIndicesPlots_new/12_test.png",width = 12, height = 5, dpi = 300)
}
