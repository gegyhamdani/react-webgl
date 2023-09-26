import { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import Image from "next/image";

const UnityLoader = () => {
  const {
    unityProvider,
    isLoaded,
    loadingProgression,
    requestFullscreen,
    takeScreenshot,
  } = useUnityContext({
    loaderUrl: "./unity/test1.loader.js",
    dataUrl: "./unity/test1.data",
    frameworkUrl: "./unity/test1.framework.js",
    codeUrl: "./unity/test1.wasm",
    webglContextAttributes: {
      preserveDrawingBuffer: true,
    },
  });

  const [screenshotDatas, setScreenshotDatas] = useState([]);

  const handleClickFullscreen = () => {
    if (isLoaded === false) {
      return;
    }
    requestFullscreen(true);
  };

  const handleClickScreenshot = () => {
    if (isLoaded === false) {
      return;
    }
    const screenshotData = takeScreenshot();
    if (screenshotData !== undefined) {
      setScreenshotDatas([screenshotData, ...screenshotDatas]);
    }
  };

  return (
    <main className="flex flex-col items-center gap-10">
      <h1 className="text-3xl font-bold">Unity on React</h1>

      <div className="bg-[#cecece] w-[1000px] h-[500px] flex items-center justify-center">
        {isLoaded === false && (
          <div className="bg-[#8c8c8c] w-[800px] h-[10px] rounded-[6px] overflow-hidden">
            <div
              className="h-[8px] rounded-[5px] m-[2px] bg-[#ffffff] transition duration-300 ease-out"
              style={{ width: loadingProgression * 100 }}
            />
          </div>
        )}
        <Unity
          unityProvider={unityProvider}
          style={{ display: isLoaded ? "block" : "none" }}
          className="w-full h-full"
        />
      </div>
      <p className="mt-[-32px] text-sm">Press ESC to show your cursor</p>
      <div className="flex">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleClickFullscreen}
        >
          Fullscreen
        </button>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleClickScreenshot}
        >
          Screenshot
        </button>
      </div>
      <h2 className="text-xl">Screenshots</h2>
      <div className="grid grid-cols-3 gap-6 mt-[-16px]">
        {screenshotDatas.map((data, index) => (
          <Image
            src={data}
            width={250}
            height={250}
            key={index}
            alt="Screenshot"
          />
        ))}
      </div>
    </main>
  );
};

export default UnityLoader;
