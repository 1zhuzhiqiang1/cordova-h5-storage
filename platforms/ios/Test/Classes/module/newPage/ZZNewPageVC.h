//
//  ZZNewPageVC.h
//  Test
//
//  Created by anyware on 17/3/17.
//
//

#import <Cordova/CDVViewController.h>
#import <Cordova/CDVCommandDelegateImpl.h>
#import <Cordova/CDVCommandQueue.h>

@interface ZZNewPageVC : CDVViewController

//-----属性------
@property (nonatomic, strong) NSString *index;

@end

@interface ZZNewPageCommandDelegate : CDVCommandDelegateImpl
@end

@interface ZZNewPageCommandQueue : CDVCommandQueue
@end
