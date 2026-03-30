# usage: /pkg/miniconda3/envs/qiime2-2021.11/bin/Rscript plot6indices.R 80 60 20 30 40 70
library(ggplot2)
library(ggforce)
library(png)
library(grid)
library(showtext)
library("ggfx") #with_blur
args <- commandArgs(trailingOnly=TRUE)

# Detect script location dynamically (works on any machine)
args_full <- commandArgs(FALSE)
script_file <- sub("--file=", "", args_full[grep("--file=", args_full)])
if (length(script_file) > 0 && nchar(script_file) > 0) {
  SourcePath <- dirname(normalizePath(script_file))
} else {
  # Fallback for interactive / RStudio use
  if (requireNamespace("this.path", quietly = TRUE)) {
    SourcePath <- dirname(this.path::this.path())
  } else {
    SourcePath <- getwd()
  }
  args <- c(80, 60, 50, 30, 40, 70)  # test values for interactive run
}
setwd(SourcePath)

OutFile<-(paste0(SourcePath,"/SixCoreIndex.png"))
OutFile1<-(paste0(SourcePath,"/SixCoreIndexLegend.png"))
showtext_auto()
font_add("ms", regular = "./msjh.ttc", bold = "./msjhbd.ttc")
img <- readPNG(paste0(SourcePath,"/NewIcon/SCICenterFigure.png"))
CenterImg_size = 5.5
CenterImg <- rasterGrob(img, interpolate=TRUE, width  = unit(CenterImg_size, "cm"), height = unit(CenterImg_size, "cm"))
icon_radious <- 3
img1 <- readPNG(paste0(SourcePath,"/NewIcon/SCI_icon1.png"))
icon1 <- rasterGrob(img1, interpolate=TRUE, width  = unit(icon_radious, "cm"), height = unit(icon_radious, "cm"))
img2 <- readPNG(paste0(SourcePath,"/NewIcon/SCI_icon2.png"))
icon2 <- rasterGrob(img2, interpolate=TRUE, width  = unit(icon_radious, "cm"), height = unit(icon_radious, "cm"))
img3 <- readPNG(paste0(SourcePath,"/NewIcon/SCI_icon3.png"))
icon3 <- rasterGrob(img3, interpolate=TRUE, width  = unit(icon_radious, "cm"), height = unit(icon_radious, "cm"))
img4 <- readPNG(paste0(SourcePath,"/NewIcon/SCI_icon4.png"))
icon4 <- rasterGrob(img4, interpolate=TRUE, width  = unit(icon_radious, "cm"), height = unit(icon_radious, "cm"))
img5 <- readPNG(paste0(SourcePath,"/NewIcon/SCI_icon5.png"))
icon5 <- rasterGrob(img5, interpolate=TRUE, width  = unit(icon_radious, "cm"), height = unit(icon_radious, "cm"))
img6 <- readPNG(paste0(SourcePath,"/NewIcon/SCI_icon6.png"))
icon6 <- rasterGrob(img6, interpolate=TRUE, width  = unit(icon_radious, "cm"), height = unit(icon_radious, "cm"))

plot.score=as.numeric(args)
plot.score[is.na(plot.score)] <- 50  # replace NA (missing/null field) with neutral default

plot.x=c()
plot.xTri=c()
plot.y=c()
plot.yTri=c()
plot.group=c()
plot.color=c()
plot.ScoreColor=c()
plot.NameColor=c()
plot.name=c("減糖健康指數","微生態多樣性","好壞菌叢指數","油切健康指數","腸道功能指數","免疫平衡指數")
for ( i in 0:5 ){
  plot.x<-append(plot.x,cos(2*pi/6*i+pi/6)/1.7)
  if (i >= 3){
    plot.y<-append(plot.y,sin(2*pi/6*i+pi/6)/1.7-0.03)
  }else{
    plot.y<-append(plot.y,sin(2*pi/6*i+pi/6)/1.7-0.05)
  }
  plot.xTri<-append(plot.xTri,cos(2*pi/6*i))
  plot.xTri<-append(plot.xTri,cos(2*pi/6*(i+1)))
  plot.xTri<-append(plot.xTri,0)
  plot.yTri<-append(plot.yTri,sin(2*pi/6*i))
  plot.yTri<-append(plot.yTri,sin(2*pi/6*(i+1)))
  plot.yTri<-append(plot.yTri,0)
  
  for (ii in 0:2){
    plot.group<-append(plot.group,i)
    
  }
}

for (i in plot.score){
  if (i <= 30){
    plot.color<-append(plot.color,"#EF3240")
    plot.color<-append(plot.color,"#EF3240")
    plot.color<-append(plot.color,"#EF3240")
    plot.ScoreColor<-append(plot.ScoreColor,"white")
    plot.NameColor<-append(plot.NameColor,"white")
  }
  if (30 < i & i < 80 ){
    plot.color<-append(plot.color,"#3FB1C8")
    plot.color<-append(plot.color,"#3FB1C8")
    plot.color<-append(plot.color,"#3FB1C8")
    plot.ScoreColor<-append(plot.ScoreColor,"white")
    plot.NameColor<-append(plot.NameColor,"white")
  }
  if (i >= 80){
    plot.color<-append(plot.color,"#EBF5F6")
    plot.color<-append(plot.color,"#EBF5F6")
    plot.color<-append(plot.color,"#EBF5F6")
    plot.ScoreColor<-append(plot.ScoreColor,"#3FB1C8")
    plot.NameColor<-append(plot.NameColor,"#3FB1C8")
  }
}

df<-data.frame(xTri=plot.xTri, yTri=plot.yTri,g=plot.group)
df2<-data.frame(x=plot.x, y=plot.y, name=plot.name, score=paste0(plot.score,"分"), ScoreColor=plot.ScoreColor, NameColor=plot.NameColor)
RectLedgend<-data.frame(x0 = c(-2.75,1.8,6.25), y0 = c(0.7,0.7,0.7),label = c("優良","正常","偏低"))
c<-ggplot() +
  xlim(-4.5,8.2)+ylim(0,1.4) +
  geom_rect(aes(xmin=-4.5, xmax=-0.5, ymin=0, ymax=1.4), fill="#EBF5F6") +
  geom_rect(aes(xmin=0, xmax=4, ymin=0, ymax=1.4), fill="#3FB1C8") +
  geom_rect(aes(xmin=4.5, xmax=8.2, ymin=0, ymax=1.4), fill="#EF3240") +
  geom_text(data=RectLedgend, aes( x=x0+0.15, y=y0, label=label), color= c('#3FB1C8','#FFFFFF','#FFFFFF'), size=25 , angle=0, fontface="bold") +
  theme(axis.title=element_blank(),
        axis.text=element_blank(),
        axis.ticks=element_blank(),
        panel.grid = element_blank(),
        text = element_text(family = "BL"),
        panel.background = element_rect(fill = "transparent"),
        plot.background = element_rect(fill = "transparent", color = NA),
        legend.background = element_rect(fill = "transparent"), # get rid of legend bg
        legend.box.background = element_rect(fill = "transparent"), # get rid of legend panel bg
        legend.position = "none")
c
ggsave(
  filename = OutFile1,
  plot = c,
  device = NULL,
  scale = 1,
  width = 14/2*1.05,
  height = 1.4/2*1.05,
  limitsize = TRUE,
  bg = NULL
)

p<-ggplot(df, aes(x = xTri, y = yTri)) + 
  #with_blur(
  #  geom_shape(aes( group = plot.group), expand = unit(-2, 'mm'), radius = unit(4, 'mm'), fill = 'black', color = 'black',size=0.4),
  #  sigma = unit(0.9, 'mm')
  #) +
  geom_shape(aes( group = plot.group), expand = unit(-1.5, 'mm'), radius = unit(4.5, 'mm'), fill = plot.color, color = 'NA',size=0.4) +
  xlim(-1,1)+ylim(-1,1) +
  with_blur(
    geom_circle( aes(x0 = 0, y0 = 0, r = 0.3), fill = 'black', color = 'black'),
    sigma = unit(2, 'mm')
  ) +
  geom_circle( aes(x0 = 0, y0 = 0, r = 0.325) ,fill = "#FFFFFF",color = "NA") + 
  annotation_custom(CenterImg , xmin=-0.4, xmax=0.4, ymin=-Inf, ymax=Inf) +
  annotation_custom(icon1, xmin=cos(2*pi*3/12)-0.35, xmax=cos(2*pi*3/12)+0.35, ymin=sin(2*pi*3/12)/1.5, ymax=(sin(2*pi*3/12))/1.5+0.025) +
  annotation_custom(icon2, xmin=-0.5-0.17, xmax=-0.5+0.15, ymin=sin(2*pi*5/12)/1.5+0.05, ymax=(sin(2*pi*5/12))/1.5+0.1) +
  annotation_custom(icon3, xmin=-0.5-0.15, xmax=-0.5+0.15, ymin=sin(2*pi*7/12)/1.5+0.10, ymax=(sin(2*pi*7/12))/1.5+0.2) +
  annotation_custom(icon4, xmin=cos(2*pi*9/12)-0.35, xmax=cos(2*pi*9/12)+0.35, ymin=sin(2*pi*9/12)/1.5+0.11, ymax=(sin(2*pi*9/12))/1.5+0.3) +
  annotation_custom(icon5, xmin=0.5-0.15, xmax=0.5+0.15, ymin=sin(2*pi*11/12)/1.5+0.10, ymax=(sin(2*pi*11/12))/1.5+0.2) +
  annotation_custom(icon6, xmin=0.5-0.15, xmax=0.5+0.15, ymin=sin(2*pi*1/12)/1.5+0.05, ymax=(sin(2*pi*1/12))/1.5+0.1) +
  geom_text(data=df2, aes( x=x, y=y, label=name), color=df2[,'NameColor'], size=22 , angle=0, fontface="bold") +
  geom_text(data=df2, aes( x=x, y=y-0.10, label=score ), color=df2[,'ScoreColor'], size=22 , angle=0, fontface="bold") +
  theme(axis.title=element_blank(),
        axis.text=element_blank(),
        axis.ticks=element_blank(),
        panel.grid = element_blank(),
        text = element_text(family = "BL"),
        panel.background = element_rect(fill = "transparent"),
        plot.background = element_rect(fill = "transparent", color = NA),
        legend.background = element_rect(fill = "transparent"), # get rid of legend bg
        legend.box.background = element_rect(fill = "transparent") # get rid of legend panel bg
  ) 

ggsave(
  filename = OutFile,
  plot = p,
  device = NULL,
  scale = 1,
  width = 8,
  height = 8,
  limitsize = TRUE,
  bg = NULL
)

