import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: `my-app`,
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.less`],
})
export class AppComponent {
  readonly files = new FormControl([]);
  removeFile(index: number): void {
    this.files.setValue(
      this.files.value?.filter((current: File, i: number) => index !== i) ?? []
    );
  }
  readonly MAX_SIZE = 5_000_000; // 5 mb
  readonly FORMATS = '.pdf,.doc,.docx,.xls,.xlsx,.html,.jpeg,.jpg,.png';
}
