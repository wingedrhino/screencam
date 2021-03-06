# screencam

**Note: Nothing works. This is WIP!**

Screencam is an Electron app that captures the current screen and pipes it into
a v4l2loopback virtual camera. This project is somewhat inspired by
[fakecam](https://github.com/diddlesnaps/fakecam)

I'm a frontend and Electron noob, so this is intended to be a learning tool!

## Installtion

### v4l2loopback

On ArchLinux/Manjaro, run `yay v4l2loopback-dkms`.

On Debian/Ubuntu, run `sudo apt install v4l2loopback-dkms`.

[Set it up](https://github.com/wingedrhino/DistroSetup/tree/trunk/DistroAgnostic#fake-webcam-setup)

Run `modprobe v4l2loopback`

We've hard-coded `/dev/video21` as the destination for our stream, but it'll be
configurable in a future version.

### Electron

There's nothing (yet) to npm/yarn install. But make sure you've Electron
globally installed in the system, via `sudo pacman -Syu electron`,
`yarn global add electron`, or `npm install electron -g` (assuming you've
got Node.js installed).

Then run `electron .`

## References

* https://www.electronjs.org/docs/api/desktop-capturer
* https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture
* https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
* https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder
* https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API
* https://nodejs.org/api/stream.html#stream_writable_streams
* https://www.guru99.com/node-js-streams-filestream-pipes.html
* https://stackoverflow.com/questions/30547322/how-to-convert-getusermedia-audio-stream-into-a-blob-or-buffer
* https://reactjs.org/tutorial/tutorial.html
* https://nextjs.org/learn/basics/create-nextjs-app
* https://www.electronjs.org/docs/tutorial/first-app
