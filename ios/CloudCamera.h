
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNCloudCameraSpec.h"

@interface CloudCamera : NSObject <NativeCloudCameraSpec>
#else
#import <React/RCTBridgeModule.h>

@interface CloudCamera : NSObject <RCTBridgeModule>
#endif

@end
