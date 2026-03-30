# usage: /pkg/miniconda3/envs/qiime2-2021.11/bin/Rscript PlotRiskMeters.R 80 60 20 30 40 70 20 30 40 70
# BrainScore HeartScore LungScore LiverScore KidneyScore StomachScore IntestineScore ImmuneScore ObeseScore MetabolismScore
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
  args <- c(90, 60, 50, 30, 40, 70, 45, 100, 45, 0)  # test values for interactive run
}
setwd(SourcePath)
args <- commandArgs(trailingOnly=TRUE)

font_add("ms", regular = "./msjh.ttc", bold = "./msjhbd.ttc")
MainImg_png <- readPNG(paste0(SourcePath,"/MeterSource/RiskMeter.png"))
MainImg_size = 10
MainImg <- rasterGrob(MainImg_png, interpolate=TRUE, width  = unit(MainImg_size/2, "cm"), height = unit(MainImg_size*2, "cm"))
Arrow_size <- 0.9
ArrowPng <-  magick::image_read(paste0(SourcePath,"/redTriangle_RiskMeter.png"))
ArrowAngle <- 270
ArrowFig <- rasterGrob(magick::image_rotate(ArrowPng, ArrowAngle ), interpolate=TRUE, width  = unit(Arrow_size, "cm"), height = unit(Arrow_size, "cm"))
scores <- as.numeric(args)/10
organ_names <- c("BrainScore","HeartScore","LungScore","LiverScore","KidneyScore",
                 "StomachScore","IntestineScore","ImmuneScore","ObeseScore","MetabolismScore")

if (!dir.exists(paste0(SourcePath,"/RiskMetersResult"))){dir.create(paste0(SourcePath,"/RiskMetersResult"))}
PlotMeter <- function(x){
  OutFile<-(paste0(SourcePath,"/RiskMetersResult","/",organ_names[x],".png"))
  label <- ifelse(scores[x] == 10, "10", sprintf("%.1f", scores[x]))
  p<-ggplot() + 
    annotation_custom(MainImg, xmin=-0.25, xmax=Inf, ymin=-Inf, ymax=Inf) +
    annotation_custom(ArrowFig, xmin=-0.3, xmax=-0.25, ymin=scores[x], ymax=scores[x]) +
    annotate("text", x = -0.45, y = scores[x], label = label, 
             hjust = 1, size = 38, fontface="bold") +
    xlim(-1,1)+ylim(-1.105,11.115) +
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
    width = 4,
    height = 10,
    limitsize = TRUE,
    bg = NULL
  )
}
lapply(seq_along(scores), PlotMeter)

