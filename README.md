# cloud-camera sdk

Đây là nội dung giới thiệu về sdk...

## Table of Contents
1. [Installation](#installation)
1. [Usage](#usage)
1. [Components](#components)
1. [API](#api)

## Installation

Dưới đây là vd về cài đặt sdk cho react native:

```sh
npm install react-native-cloud-camera

```
or

```sh
yarn add react-native-cloud-camera

```

## Usage

- Cần gọi init để kết nối giữa app bên thứ 3 vs sdk

```js
import { initSDK } from 'react-native-cloud-camera';

// appID được bên mình cung cấp khi đăng ký tích hợp. cài này sẽ có 1 trang riêng để khách hàng vào đăng ký và lấy appID.
initSDK(appID); 

```

Note: Trong sdk khi mà nhận đc appID thì mới bắt đầu kết nối socket và thực hiện các action khác.

- Khách hàng có thể dùng một số component có sẵn được cung cấp bới SDK và có thể tuỳ chỉnh styles.
// Trong SDK cần viết một số component để khách hàng có thể import vào là dùng được luôn và cho tuỳ chỉnh styles như color, padding, margin, width, height....

VD: 

```js
import { Cameras, Groups, ... } from 'react-native-cloud-camera';

<Cameras
  backgroundColor    // Chỉnh sửa màu nền
  cameraItemStyles   // Truyền vào chỉnh sửa styles của item camera
  renderItem        // Cho customer viết render item của list camera.
  className
  ....
/>
```

## Components


## API

### Methods

- init sdk như đã nói ở trên.
  ```js
    initSDK
  ```

- Lấy danh sách camera
  ```js
    
  ```

- Lấy danh sách group camera
  ```js
    
  ```
- Lấy danh sách playback camera
  ```js
    
  ```

- Update thông tin của camera
  ```js
    
  ```

- Thêm camera 
  ```js
    
  ```

- Xoá camera 
  ```js
    
  ```

- Tạo group camera 
  ```js
    
  ```
  
- Xoá group camera 
  ```js
    
  ```
  
- Play stream camera
  ```js
    
  ```
### Events listen

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
