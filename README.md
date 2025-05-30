# GTM Event Tracking Demo

โปรเจกต์สาธิตการใช้งาน Google Tag Manager (GTM) สำหรับการติดตามเหตุการณ์บนเว็บไซต์

## ข้อมูลโปรเจกต์

- เว็บไซต์ Proof-of-Concept สำหรับสาธิตการติดตามเหตุการณ์ด้วย GTM
- พัฒนาด้วย ASP.NET Core 8 (MVC)
- ภาษาหลักของเว็บไซต์: ภาษาไทย

## การติดตั้งและการใช้งาน

### ข้อกำหนดเบื้องต้น
- .NET 8 SDK

### การติดตั้ง
1. โคลนโปรเจกต์นี้มายังเครื่อง
```
git clone https://github.com/ponggun/poc-gtm.git
```

2. เข้าไปยังโฟลเดอร์โปรเจกต์
```
cd GTMDemo
```

3. รันโปรเจกต์
```
dotnet run
```

4. เปิดเบราว์เซอร์และไปที่ `http://localhost:5229`

5. รัน ngrok ngrok http http://localhost:5229

## การตั้งค่า Google Tag Manager

1. เพิ่มโค้ด GTM ในตำแหน่งที่กำหนดไว้ในไฟล์ `Views/Shared/_Layout.cshtml`
2. เพิ่มแท็ก, ตัวแปร และทริกเกอร์ใน GTM Web Interface
3. เพิ่มการติดตามเหตุการณ์ที่ต้องการ

## เหตุการณ์ที่สามารถติดตามได้

- การคลิกปุ่ม CTA หลัก
- การคลิกปุ่มคุณสมบัติต่างๆ
- การส่งแบบฟอร์มสมัครรับข่าวสาร
- การคลิกลิงก์ภายนอก
- การคลิกปุ่มยอมรับนโยบายความเป็นส่วนตัว

## ลิขสิทธิ์

MIT License