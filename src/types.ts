import type { CameraProps } from 'react-native-vision-camera';
export type {
  Frame,
  ReadonlyFrameProcessor,
  FrameProcessorPlugin,
} from 'react-native-vision-camera';
export interface ScanBarcodeOptions {
  codeType:
    | 'code-128'
    | 'code-39'
    | 'code-93'
    | 'codabar'
    | 'ean-13'
    | 'ean-8'
    | 'itf'
    | 'upc-e'
    | 'qr'
    | 'pdf-417'
    | 'aztec'
    | 'data-matrix'
    | 'all'
    | 'upc-a';
}

export type BarcodeData = {
  bottom: number;
  height: number;
  left: number;
  rawValue: string;
  right: number;
  top: number;
  width: number;
};

export type BarcodeDataMap = {
  [key: number]: BarcodeData;
};

export type CameraTypes = {
  callback: (data: BarcodeDataMap) => void;
  options: ScanBarcodeOptions;
} & CameraProps;
