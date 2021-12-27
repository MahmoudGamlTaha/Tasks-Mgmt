import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomcolor'
})
export class RandomcolorPipe implements PipeTransform {
  private static readonly colors: Map<string, string> = new Map();
  private getRandomColor(): string {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  public transform(id: string): string {
    const color = RandomcolorPipe.colors.get(id) ?? this.getRandomColor();

    if (!RandomcolorPipe.colors.has(id)) {
      RandomcolorPipe.colors.set(id, color);
    }

    return color;
  }
}
