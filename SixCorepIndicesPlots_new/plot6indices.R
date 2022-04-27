# usage: /pkg/miniconda3/envs/qiime2-2021.11/bin/Rscript plot6indices.R 80 60 20 30 40 70
library(ggplot2)
library(ggforce)
library(png)
library(grid)
library(showtext)
library(ggfx) #with_blur
setwd("/Users/chuanfang/Desktop/Rplot")
OutFile<-("/Users/chuanfang/Downloads/SixCorepIndicesPlots_new/SixCoreIndex.png")
OutFile1<-("/Users/chuanfang/Downloads/SixCorepIndicesPlots_new/SixCoreIndexLegend.png")
showtext_auto()
font_add("ms", regular = "/Users/chuanfang/Downloads/SixCorepIndicesPlots_new/msjh.ttc", bold = "/Users/chuanfang/Downloads/SixCorepIndicesPlots_new/msjhbd.ttc")
img <- readPNG("/Users/chuanfang/Downloads/SixCorepIndicesPlots_new/SCICenterFigure.png")
CenterImg <- rasterGrob(img, interpolate=TRUE)
img1 <- readPNG("/Users/chuanfang/Downloads/SixCorepIndicesPlots_new/SCI_icon1.png")
icon1 <- rasterGrob(img1, interpolate=TRUE)
img2 <- readPNG("/Users/chuanfang/Downloads/SixCorepIndicesPlots_new/SCI_icon2.png")
icon2 <- rasterGrob(img2, interpolate=TRUE)
img3 <- readPNG("/Users/chuanfang/Downloads/SixCorepIndicesPlots_new/SCI_icon3.png")
icon3 <- rasterGrob(img3, interpolate=TRUE)
img4 <- readPNG("/Users/chuanfang/Downloads/SixCorepIndicesPlots_new/SCI_icon4.png")
icon4 <- rasterGrob(img4, interpolate=TRUE)
img5 <- readPNG("/Users/chuanfang/Downloads/SixCorepIndicesPlots_new/SCI_icon5.png")
icon5 <- rasterGrob(img5, interpolate=TRUE)
img6 <- readPNG("/Users/chuanfang/Downloads/SixCorepIndicesPlots_new/SCI_icon6.png")
icon6 <- rasterGrob(img6, interpolate=TRUE)
args <- commandArgs(trailingOnly=TRUE)
plot.score=as.numeric(args)

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
    plot.y<-append(plot.y,sin(2*pi/6*i+pi/6)/1.7-0.02)
  }else{
    plot.y<-append(plot.y,sin(2*pi/6*i+pi/6)/1.7)
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
    plot.color<-append(plot.color,"#A7A7A7")
    plot.color<-append(plot.color,"#A7A7A7")
    plot.color<-append(plot.color,"#A7A7A7")
    plot.ScoreColor<-append(plot.ScoreColor,"red")
    plot.NameColor<-append(plot.NameColor,"white")
  }
  if (30 < i & i < 80 ){
    plot.color<-append(plot.color,"white")
    plot.color<-append(plot.color,"white")
    plot.color<-append(plot.color,"white")
    plot.ScoreColor<-append(plot.ScoreColor,"black")
    plot.NameColor<-append(plot.NameColor,"black")
  }
  if (i >= 80){
    plot.color<-append(plot.color,"#FFDC65")
    plot.color<-append(plot.color,"#FFDC65")
    plot.color<-append(plot.color,"#FFDC65")
    plot.ScoreColor<-append(plot.ScoreColor,"black")
    plot.NameColor<-append(plot.NameColor,"black")
  }
}

df<-data.frame(xTri=plot.xTri, yTri=plot.yTri,g=plot.group)
df2<-data.frame(x=plot.x, y=plot.y, name=plot.name, score=paste0(plot.score,"分"), ScoreColor=plot.ScoreColor, NameColor=plot.NameColor)
circleLedgend<-data.frame(x0 = c(0,0,0), y0 = c(0.25,0,-0.25), r = c(0.05,0.05,0.05),label = c("優良","正常","偏低"))
c<-ggplot() +
  xlim(-0.1,0.3)+ylim(-0.35,0.35) +
  geom_circle(data = circleLedgend, aes(x0 = 0, y0 = 0.25, r = 0.05) ,fill = "#FFDC65") + 
  geom_circle(data = circleLedgend, aes(x0 = 0, y0 = 0, r = 0.05) ,fill = "white") + 
  geom_circle(data = circleLedgend, aes(x0 = 0, y0 = -0.25, r = 0.05) ,fill = "#A7A7A7") + 
  geom_text(data=circleLedgend, aes( x=x0+0.15, y=y0, label=label), color="black", size=18 , angle=0, fontface="bold") +
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
  width = 1.6,
  height = 2.8,
  limitsize = TRUE,
  bg = NULL
)

p<-ggplot(df, aes(x = xTri, y = yTri)) + 
  # geom_shape(aes( group = plot.group), expand = unit(-0.4, 'mm'), radius = unit(3.9, 'mm'), fill = "black",alpha=0.05,size=0) +
  # geom_shape(aes( group = plot.group), expand = unit(-0.6, 'mm'), radius = unit(3.8, 'mm'), fill = "black",alpha=0.08,size=0) +
  # geom_shape(aes( group = plot.group), expand = unit(-0.7, 'mm'), radius = unit(3.7, 'mm'), fill = "black",alpha=0.12,size=0) +
  # geom_shape(aes( group = plot.group), expand = unit(-1.0, 'mm'), radius = unit(3.4, 'mm'), fill = "black",alpha=0.20,size=0) +
  # geom_shape(aes( group = plot.group), expand = unit(-1.3, 'mm'), radius = unit(3.15, 'mm'), fill = "black",alpha=0.50,size=0) +
  # geom_shape(aes( group = plot.group), expand = unit(-1.5, 'mm'), radius = unit(2.98, 'mm'), fill = "black",alpha=0.70,size=0) +
  with_blur(
    geom_shape(aes( group = plot.group), expand = unit(-2, 'mm'), radius = unit(4, 'mm'), fill = 'black', color = 'black',size=0.4),
    sigma = unit(0.7, 'mm')
  ) +
  geom_shape(aes( group = plot.group), expand = unit(-2, 'mm'), radius = unit(4, 'mm'), fill = plot.color, color = 'black',size=0.4) +
  xlim(-1,1)+ylim(-1,1) +
  annotation_custom(CenterImg , xmin=-0.4, xmax=0.4, ymin=-Inf, ymax=Inf) +
  annotation_custom(icon1, xmin=cos(2*pi*3/12)-0.35, xmax=cos(2*pi*3/12)+0.35, ymin=sin(2*pi*3/12)/1.5, ymax=(sin(2*pi*3/12))/1.5+0.15) +
  annotation_custom(icon2, xmin=-0.5-0.17, xmax=-0.5+0.15, ymin=sin(2*pi*5/12)/1.5+0.05, ymax=(sin(2*pi*5/12))/1.5+0.2) +
  annotation_custom(icon3, xmin=-0.5-0.15, xmax=-0.5+0.15, ymin=sin(2*pi*7/12)/1.5+0.10, ymax=(sin(2*pi*7/12))/1.5+0.25) +
  annotation_custom(icon4, xmin=cos(2*pi*9/12)-0.35, xmax=cos(2*pi*9/12)+0.35, ymin=sin(2*pi*9/12)/1.5+0.11, ymax=(sin(2*pi*9/12))/1.5+0.26) +
  annotation_custom(icon5, xmin=0.5-0.15, xmax=0.5+0.15, ymin=sin(2*pi*11/12)/1.5+0.10, ymax=(sin(2*pi*11/12))/1.5+0.25) +
  annotation_custom(icon6, xmin=0.5-0.15, xmax=0.5+0.15, ymin=sin(2*pi*1/12)/1.5+0.05, ymax=(sin(2*pi*1/12))/1.5+0.2) +
  geom_text(data=df2, aes( x=x, y=y, label=name), color=df2[,'NameColor'], size=20 , angle=0, fontface="bold") +
  geom_text(data=df2, aes( x=x, y=y-0.10, label=score ), color=df2[,'ScoreColor'], size=24 , angle=0, fontface="bold") +
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
p
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

