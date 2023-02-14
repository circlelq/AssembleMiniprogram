#!/usr/bin/env python
# -*- coding:utf-8 -*-
# 压缩图片脚本
from PIL import Image
from pathlib import Path
import os
from pathlib import Path
import sys


def get_file_size(fileName):
    size = os.path.getsize(fileName)
    return size / 1024


def compress_file_jpg(fileName):
    print(fileName)
    inputPath = Path('input/')
    outPath = Path('会徽/')
    im = Image.open(inputPath / fileName)
    sizeMax = 400  # 大图长边的像素数
    x, y = im.size
    if x < sizeMax and y < sizeMax:
        # 原图尺寸足够小
        im.save(outPath / fileName)
    else:
        if x > y:
            x_resize = sizeMax
            y_resize = int(y/x*sizeMax)
            out = im.resize((x_resize, y_resize))
        else:
            y_resize = sizeMax
            x_resize = int(x/y*sizeMax)
            out = im.resize((x_resize, y_resize))
        out.save(outPath / fileName)

    # if im.format != 'JPEG':
    #     print('文件后缀和文件类型不符合', fileName)
    #     sys.exit(1)
    iterateNum = 3
    while(get_file_size(outPath / fileName) > 60):
        print(get_file_size(outPath / fileName))
        if(iterateNum == 0):
            break
        im = Image.open(outPath / fileName)
        im.save(outPath / fileName, quality=80)
        iterateNum = iterateNum - 1


if __name__ == '__main__':
    if not os.path.exists('会徽'):
        os.makedirs('会徽')
    inputPath = Path('input/')
    for fileName in os.listdir(inputPath):
        # 排除隐藏文件
        if fileName[0] == '.':
            continue
        fileType = fileName.split('.')
        compress_file_jpg(fileName)
