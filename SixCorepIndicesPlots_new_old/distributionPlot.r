# package installation
# install.packages("jsonlite") #read json file package
# install.packages("showtext")
# install.packages("magrittr")
# install.packages("dplyr")
# install.packages("png")

# library packages
library(png)
library(magrittr)
library(jsonlite)
library(ggplot2)
library(showtext)
library(dplyr)
showtext_auto()

# 無條件捨去
floor_dec <- function(x, level=1) round(x - 5*10^(-level-1), level)

# 無條件進位
ceiling_dec <- function(x, level=1) round(x + 5*10^(-level-1), level)

# read json and png file

args <- commandArgs(trailingOnly = TRUE)
filePath<-args[1]

trianglePng <- readPNG('/Users/chuanfang/chuanfang/Website/microbiome-report-api/SixCorepIndicesPlots_new/redTriangle.png')	
json_data <- fromJSON(filePath)

# read numGenus in json file
numGenus <- strtoi(json_data$analysisResult$NumberOfGenus)
# 無條件進位，算出red bar位置
redColumnNum <- ceiling_dec(numGenus,-1) / 10 
textNum <- redColumnNum
if(redColumnNum == 11){
  textNum = redColumnNum -1
}else if(redColumnNum == 1){
  textNum = redColumnNum + 1
}

# 設定background值 datafrmae
data <- data.frame(
  x=c("6-10","11-20","21-30","31-40","41-50","51-60","61-70","71-80","81-90","91-100","101-110") ,  
  y=c(0.005, 0.015, 0.03, 0.08, 0.18, 0.25, 0.22, 0.14, 0.06, 0.02, 0.005)
  )

# 設定x軸順序
data$x <- factor(data$x,levels=c("6-10","11-20","21-30","31-40","41-50","51-60","61-70","71-80","81-90","91-100","101-110"))

# 設定column bar顏色（紅、金）
data <-
  data %>% 
  mutate(
    color = case_when(
      row_number() == redColumnNum ~ "brown1",
      y == "Other" ~ "gold",
      ## all others should be gold
      TRUE ~ "gold"
    )
  )

# Barplot
ggplot(data, aes(x, y)) + 
  geom_bar(stat = "identity", fill= data$color) + #帶入pipe完後的color
  scale_y_continuous(labels = function(x) paste0(x*100, "%"), expand = c(0, 0),limits = c(0,0.32), breaks=seq(0,0.3, by = 0.05)) + #設定y軸高度32%，0->0.3刻度為5
  xlab("菌數數量") + ylab("人\n群\n百\n分\n比") + #設定xy軸title
  theme_classic() + #設定背景主題
  theme(axis.text=element_text(size=60,face="bold"), axis.title=element_text(size=60,face="bold")) + #設定xy軸字體大小
  theme(axis.title.x = element_text(margin=margin(t=30),size=72), axis.title.y = element_text(margin=margin(r=40),angle=0,vjust = 0.5,size=72)) + #設定xy title的位置及角度
  theme(axis.text.x = element_text(face="bold",angle = 45, hjust=1, margin=margin(t=10)), axis.text.y = element_text(face="bold",margin=margin(r=10))) + #設定xy 刻度位置及角度
  annotate("text", x = textNum, y = 0.3, label = paste("您的菌數數量:",numGenus),size=28,fontface="bold") + # 加入annotate text
  annotation_raster(trianglePng, ymin = 0.26,ymax= 0.28,xmin = redColumnNum - 0.25,xmax = redColumnNum + 0.25) # 加入紅色三角形

  ggsave("/Users/chuanfang/chuanfang/Website/microbiome-report-api/SixCorepIndicesPlots_new/8_test.png",width = 12, height = 9, dpi = 300)