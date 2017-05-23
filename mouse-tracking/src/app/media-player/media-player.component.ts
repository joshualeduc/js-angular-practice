import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MediaPlayer } from 'dashjs';

@Component({
  selector: 'media-player',
  template: `
  <video #videoPlayer></video>
  `,
  styles: ['video {border: 3px solid black;}']
})

export class MediaPlayerComponent {
  @ViewChild('videoPlayer') videoPlayer;
  url = "http://vm2.dashif.org/livesim-dev/periods_60/xlink_30/insertad_1/testpic_2s/Manifest.mpd";
  player = MediaPlayer().create();

  ngAfterViewInit(): void {
    this.player.initialize(this.videoPlayer.nativeElement, this.url, true);
  }
}