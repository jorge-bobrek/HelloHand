class AudioPlayer {
  private play(path: string) {
    const audio = new Audio(path);
    audio.volume = 0.4;
    audio.play().catch(() => {
      console.log("Can't play the sound");
    });
  }

  success() {
    this.play('/sounds/correct.mp3');
  }

  error() {
    this.play('/sounds/wrong.mp3');
  }

  victory() {
    this.play('/sounds/victory.mp3');
  }
  
}

export const audioPlayer = new AudioPlayer();