import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

export class Worker {

    public ffmpeg;

    constructor() {
        this.ffmpeg = createFFmpeg({ log: true });
    }

    public async initiliaze(): Promise<boolean> {
        await this.ffmpeg.load();
        return true;
    }

    public async convertVideo(video: any): Promise<string> {
        // Write the file to memory 
        this.ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(video));

        // Run the FFMpeg command
        // await this.ffmpeg.run('-i', 'input.mp4', '-ss', '2', '-filter_complex', '[0:v]reverse,fifo[r];[0:v][r] concat=n=2:v=1 [v]', '-map', '[v]', 'output.mp4');
        // ffmpeg -i test.mp4 -lavfi ^ trim=5:10,setpts=PTS-STARTPTS,split[v1][v2]; ^ [v2]reverse[v2a]; ^ [v1][v2a]concat=n=2:v=1:a=0 ^ -an loop.mp4
        await this.ffmpeg.run('-i', 'input.mp4', '-filter_complex', 'trim=0:2,setpts=PTS-STARTPTS,split[v1][v2];[v2]reverse,fifo[r];[v1][r]concat,loop=5:250,setpts=N/55/TB', '-an', '-pix_fmt', 'yuv420p', 'output.mp4');

        // Read the result
        const data = this.ffmpeg.FS('readFile', 'output.mp4');

        // Create a URL
        return URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }));
    }

}