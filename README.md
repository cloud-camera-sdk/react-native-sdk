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
import { CloudCamera } from 'react-native-cloud-camera';

// appID được bên mình cung cấp khi đăng ký tích hợp. cài này sẽ có 1 trang riêng để khách hàng vào đăng ký và lấy appID.
CloudCamera.initSDK(appID); 

```

Note: Trong sdk khi mà nhận đc appID thì mới bắt đầu kết nối socket và thực hiện các action khác.

- Khách hàng có thể dùng một số component có sẵn được cung cấp bới SDK và có thể tuỳ chỉnh styles.

VD: 

```js
// Trong SDK cần viết một số component để khách hàng có thể import vào là dùng được luôn và cho tuỳ chỉnh styles như color, padding, margin, width, height....

import { Cameras, Groups, Gateways... } from 'react-native-cloud-camera';

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
- Nếu như khách hàng k dùng các component có sẵn thì có thể gọi các method dưới đây để lấy data và hiển thị.

### Methods

- init sdk như đã nói ở trên.
  ```js
    CloudCamera.initSDK();
  ```

- Lấy danh sách camera
  ```js
    CloudCamera.getCameras(props); // props: Có thể thêm một số option truyền vào
  ```

- Lấy danh sách group camera
  ```js
    CloudCamera.getGroups(props);
  ```
- Lấy danh sách playback camera
  ```js
    CloudCamera.getPlaybacks(props);
  ```

- Update thông tin của camera
  ```js
    CloudCamera.updateCamera(props);
  ```

- Thêm camera 
  ```js
    CloudCamera.addCamera(props);
  ```

- Xoá camera 
  ```js
    CloudCamera.deleteCamera(props);
  ```

- Tạo group camera 
  ```js
    CloudCamera.createGroup(props);
  ```
  
- Xoá group camera 
  ```js
    CloudCamera.deleteGroup(props);
  ```
  
- Play stream camera
  ```js
    CloudCamera.playCamera(props);
  ```
  
### Events listen

- Lắng nghe kết nối sdk thành công hay lỗi, mất kết nối
  ```js
    // Lắng nghe sự kiện connect với key Connect 
    CloudCamera.listener('Connect', (event) => {
      // todo
    )
  ```

- Lắng nghe bản tin update từ socket tự động bắn về như cập nhật trạng thái của camera, gateway...
  ```js
    CloudCamera.listener('Update', (event) => {
      // todo
    )
  ```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
