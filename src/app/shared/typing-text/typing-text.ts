import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing-text',
  standalone: false,
  templateUrl: './typing-text.html',
  styleUrl: './typing-text.css',
})
export class TypingText implements OnInit, OnDestroy {

  words: string[] = ['Code', 'Debug', 'Deliver'];
  displayText = '';

  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => this.typingEffect(), 120);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  private typingEffect(): void {
    const currentWord = this.words[this.wordIndex];

    if (!this.isDeleting) {
      this.displayText = currentWord.substring(0, this.charIndex + 1);
      this.charIndex++;

      if (this.charIndex === currentWord.length) {
        setTimeout(() => (this.isDeleting = true), 1000);
      }
    } else {
      this.displayText = currentWord.substring(0, this.charIndex - 1);
      this.charIndex--;

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
      }
    }
  }
}
