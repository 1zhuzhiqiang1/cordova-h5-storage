/********* AnywarePlugin.m Cordova Plugin Implementation *******/

#import <Cordova/CDV.h>

#import "ZZNewPageVC.h"

@interface AnywarePlugin : CDVPlugin {
  // Member variables go here.
}

- (void)coolMethod:(CDVInvokedUrlCommand*)command;
- (void)openNewPage:(CDVInvokedUrlCommand*)command;
- (void)popVC:(CDVInvokedUrlCommand*)command;

@end

@implementation AnywarePlugin

- (void)popVC:(CDVInvokedUrlCommand*)command {
    [self.viewController.navigationController popViewControllerAnimated:YES];
}

- (void)coolMethod:(CDVInvokedUrlCommand*)command
{
    MyLog(@"coolMethod");
    CDVPluginResult* pluginResult = nil;
    NSString* echo = [command.arguments objectAtIndex:0];

    if (echo != nil && [echo length] > 0) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)openNewPage:(CDVInvokedUrlCommand*)command {
    ZZNewPageVC *newPageVC = [[ZZNewPageVC alloc] init];
    newPageVC.index = @"http://172.16.1.214:8080/H5Storage/www2/";
    [self.viewController.navigationController pushViewController:newPageVC animated:YES];
}

@end
