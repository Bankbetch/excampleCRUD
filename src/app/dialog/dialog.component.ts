import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    // กำหนดให้หน้าที่เรียก Dialog ส่งข้อมูลมาได้
    @Inject(MAT_DIALOG_DATA) public data: any,
    // กำหนดตัวแปลเพื่อให้เรียกใช้ dialog
    private dialogRef: MatDialogRef<DialogComponent>, ) { }

  // เมื่อโหลด html เสร็จ ให้ component เรียก function หรือทำอะไรต่อ
  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }

  onSave() {
    const value = {
    };
    this.dialogRef.close(value);
  }
}
