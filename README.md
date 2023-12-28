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

// appID được bên mình cung cấp khi đăng ký tích hợp. cài này sẽ có 1 trang riêng để khách hàng vào đăng ký và lấy appID, secretKey.
CloudCamera.initSDK(appID, secretKey); 

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
  
- Get thông tin của 1 camera
  ```js
    CloudCamera.getCameraDetail(props);
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
      // trong event sẽ có type, message.
      type Connecting -> đang kết nối
      type Connected -> Kết nối thành công
      type DisConnect -> Mất kết nối
      type Error -> Thông báo lỗi
    )
  ```

- Lắng nghe bản tin update từ socket tự động bắn về như cập nhật trạng thái của camera, gateway...
  ```js
    CloudCamera.listener('Update', (event) => {
      // Một số event như
      DEVICE_CHANGE_STATE: Cập nhật trạng thái hoạt động hay không của camera, gateway.
      ...
    )
  ```
#### Note
Ý tưởng chỗ này là khi người dùng gọi 1 method vd như CloudCamera.getCameras(props) thì có thể chờ đợi kết quả trả về luôn khi gọi method. Nếu không thì người dùng có thể lắng nghe data từ event bên dưới.

- Lắng nghe bản tin liên quan đến camera từ socket bắn về
  ```js
    CloudCamera.listener('Camera', (event) => {
      // Một số event như
      LIST_CAMERA
      ADD_CAMERA
      DELETE_CAMERA
      UPDATE_CAMERA
      ...
    )
  ```

- Lắng nghe bản tin liên quan đến group camera từ socket bắn về
  ```js
    CloudCamera.listener('Group', (event) => {
      // Một số event như
      LIST_GROUP
      ADD_GROUP
      DELETE_GROUP
      UPDATE_GROUP
      ...
    )
  ```
- Lắng nghe bản tin liên quan đến playback camera từ socket bắn về
  ```js
    CloudCamera.listener('Group', (event) => {
      // Một số event như
      LIST_PLAYBACK
      ...
    )
  ```
- Lắng nghe bản tin liên quan đến play camera
  ```js
    CloudCamera.listener('Group', (event) => {
      // Một số event như
      START_STREAM_CAMERA
      STOP_STREAM_CAMERA
      ...
    )
  ```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
