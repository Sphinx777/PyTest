from scrapy.spider import Spider
from scrapy.selector import Selector
import time
import csv
import codecs

class FbSpider(Spider):
    name = "FB"
    allowed_domains = ['facebook.com']
    start_urls = [
                  "file:///D:/MySyncFolder/Java/workspace/PyTest/pyTest/Facebook.html"
    ]

    def parse(self,response):
        '''filename = "FbSpider"
        open(filename,'wb').write(response.body)'''
        def printSelector(inputStr):
            s=""
            for t in inputStr:
                s+=t.encode('cp950', "replace").decode('cp950').encode('utf-8')+" "
            #print s
            return s
                #print(t.encode('cp950', "replace").decode('cp950'))
                 #print t.encode('utf-8').decode('utf-8') 
        
        def exportToCSV(data):
            f = open("export.csv","w")  
            f.write(codecs.BOM_UTF8)  
            w = csv.writer(f)  
            w.writerows(data)  
            f.close()  
                
        sel = Selector(response)  
        #people
        #sites = sel.xpath('//a[@class="profileLink" and contains(@data-hovercard,"user")]')
        #sites = sel.xpath('//div[contains(@class,"userContentWrapper")]//div//span/a[(contains(@class,"profileLink") or contains(@data-hovercard,"user")) and not(contains(@data-hovercard,"page"))]')
        #location
        #sites = sel.xpath('//div[contains(@class,"userContentWrapper")]//div//span/a[contains(@data-hovercard,"page")]')
        #time`
        #sites = sel.xpath('string(//div[contains(@class,"userContentWrapper")]//div//span/a/abbr/@data-utime)')
        #message
        #sites = sel.xpath('//div[contains(@class,"userContentWrapper")]//div[contains(@class,"userContent")]//p')
        
        #for whole content
        sites = sel.xpath('//div[contains(@class,"userContentWrapper")]/div[1]')
        list = [['people','location','datetime','message']]
        for site in sites:  
            #print people
            people = site.xpath('div[2]/div//span/a[(contains(@class,"profileLink") or contains(@data-hovercard,"user")) and not(contains(@data-hovercard,"page"))]/text()').extract()  
            #print 'people:'
            people = printSelector(people) 
            #location
            location = site.xpath('div[2]/div//span/a[contains(@data-hovercard,"page")]/text()').extract()
            #print 'location:'
            location = printSelector(location)
            #time
            datetime = site.xpath('div[2]/div//span/a/abbr/@data-utime').extract()
            #print 'time:'
            datetime = printSelector(datetime)
            if datetime <> '':
                #print time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(float(datetime)))
                datetime = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(float(datetime)))
            else:
                print
            #message
            messsage = site.xpath('div[3 or contains(@class,"userContent")]//p//text()').extract()
            #print 'message:'
            messsage = printSelector(messsage)
            
            print 'people:' + people + ' ,location:' + location + ' ,datetime:' + datetime + ' ,message:' + messsage
            print            
            list.append([people,location,datetime,messsage])
        
        exportToCSV(list)