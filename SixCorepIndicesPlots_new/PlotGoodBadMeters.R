# usage: /pkg/miniconda3/envs/qiime2-2021.11/bin/Rscript PlotGoodBadMeters.R 100 50 0 30 60 70
# MicrobiomeIndex GoodBadIndex SugerIndex OilIndex ImmuneIndex GutIndex
library(ggplot2)
library(magick)
library(ggforce)
library(png)
library(grid)
library(showtext)

showtext_auto()
args_full <- commandArgs(FALSE)
script_file <- sub("--file=", "", args_full[grep("--file=", args_full)])
if (length(script_file) > 0 && nchar(script_file) > 0) {
  SourcePath <- dirname(normalizePath(script_file))
} else {
  if (requireNamespace("this.path", quietly = TRUE)) {
    SourcePath <- dirname(this.path::this.path())
  } else {
    SourcePath <- getwd()
  }
  args <- c(50, 0, 100, 30, 40, 70)  # test values for interactive run
}
setwd(SourcePath)
args <- commandArgs(trailingOnly=TRUE)

font_add("ms", regular = "./msjh.ttc", bold = "./msjhbd.ttc")
MainImg_png_GoodBad <- readPNG(paste0(SourcePath,"/MeterSource/GoodBadMeter.png"))
MainImg_size_GoodBad = 5
MainImg_GoodBad <- rasterGrob(MainImg_png_GoodBad, interpolate=TRUE, width  = unit(MainImg_size_GoodBad*2020/1000, "cm"), height = unit(MainImg_size_GoodBad*856/1000, "cm"))
MainImg_png_HighLow <- readPNG(paste0(SourcePath,"/MeterSource/HighLowMeter.png"))
MainImg_size_HighLow = 5
MainImg_HighLow <- rasterGrob(MainImg_png_HighLow, interpolate=TRUE, width  = unit(MainImg_size_HighLow*2020/1000, "cm"), height = unit(MainImg_size_HighLow*856/1000, "cm"))
scores <- as.numeric(args)
IndexNames <- c("MicrobiomeIndex", "GoodBadIndex", "SugerIndex", "OilIndex", "ImmuneIndex", "GutIndex")
Arrow_size <- 0.04
Arrow_Distance = 0.63
if (!dir.exists(paste0(SourcePath,"/GoodBadMetersResult"))){dir.create(paste0(SourcePath,"/GoodBadMetersResult"))}
PlotMeter <- function(x){
  if (x %in% c(1,3,4,5,6)){
    MainImg<-MainImg_GoodBad
  }else{
    MainImg<-MainImg_HighLow
  }
  ArrowAngle <- (scores[x]-100)*(1.8)*-1
  Arrowradius <- ArrowAngle*pi/180 #Angle to radius = x*pi/180
  plot.x=c()
  plot.xTri=c()
  plot.y=c()
  plot.yTri=c()
  plot.color=c('red')
  Xpos = (cos(Arrowradius))/pi*Arrow_Distance*2
  Ypos = ((sin(Arrowradius))/pi*Arrow_Distance*2.1)+0.244
  plot.xTri <- c(
    Xpos + cos((ArrowAngle+0)  *pi/180) * Arrow_size,
    Xpos + cos((ArrowAngle+120)*pi/180) * Arrow_size/2,
    Xpos + cos((ArrowAngle+240)*pi/180) * Arrow_size/2
  )
  plot.yTri <- c(
    Ypos + sin((ArrowAngle+0)  *pi/180) * Arrow_size,
    Ypos + sin((ArrowAngle+120)*pi/180) * Arrow_size/2,
    Ypos + sin((ArrowAngle+240)*pi/180) * Arrow_size/2
  )
  df<-data.frame(xTri=plot.xTri, yTri=plot.yTri)

  OutFile<-(paste0(SourcePath,"/GoodBadMetersResult","/",IndexNames[x],".png"))
  p<-ggplot(df, aes(x = xTri, y = yTri)) + 
    annotation_custom(MainImg, xmin=-Inf, xmax=Inf, ymin=-Inf, ymax=Inf) +
    geom_shape( expand = unit(0, 'mm'), radius = unit(0, 'mm'), fill = plot.color, color = 'NA',size=0.04) +
    xlim(-1+0.01,1+0.01)+ylim(0,1) +
    coord_fixed(ratio = 856*1.5/2020*1.5) + 
    theme(axis.title=element_blank(),
          axis.text=element_blank(),
          axis.ticks=element_blank(),
          panel.grid = element_blank(),
          text = element_text(family = "BL"),
          panel.background = element_rect(fill = "transparent"),
          plot.background = element_rect(fill = "transparent", color = NA),
          legend.background = element_rect(fill = "transparent"), # get rid of legend bg
          legend.box.background = element_rect(fill = "transparent"), # get rid of legend panel bg
          plot.margin = margin(0, 0, 0, 0)
    ) 
  p
  ggsave(
    filename = OutFile,
    plot = p,
    device = NULL,
    scale = 1,
    width = 5,
    height = 2,
    limitsize = FALSE,
    bg = NULL
  )
  ArrowAngle
}
lapply(seq_along(scores), PlotMeter)
