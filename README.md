### Front-end quiz
ให้เขียนหน้าเว็บ Front-end จำนวน 2 หน้า ได้แก่

### 1. Product lists 
    รายละเอียดมีดังนี้
    1. หน้า Product lists จะมีการแสดงผล 2 แบบ ได้แก่แบบ Grids และ แบบ Lists ตามภาพ
    2. ขนาดต่างๆ เช่น font, ระยะห่าง ฯลฯ สามารถกำหนดได้อย่างอิสระ
    3. เมื่อกดปุ่มตรงด้านบนขวามือ จะเปลี่ยนการแสดงผลเป็น Grids หรือ Lists ได้
    4. เมื่อเอาเมาส์ไปชี้ตรงรายการสินค้า จะแสดงผล hOver ตามภาพ
    5. เมื่อคลิกตรงปุ่มจะไปเปิดหน้า Product detail
![alt text](/ui/01.ChomCHOB-Example-Grids.png)
ภาพ 1. การแสดงผลแบบ Grids
![alt text](/ui/02.ChomCHOB-Example-Lists.png)
ภาพ 2. การแสดงผลแบบ Lists
![alt text](/ui/06.Product-lists-change-views.png)
ภาพ 3. ปุ่มเปลี่ยนการแสดงผลแบบ Grids หรือ Lists
![alt text](/ui/03.ChomCHOB-Example-Grids-On-Hover)
ภาพ 4.1 เมื่อนำเมาส์มาวางบนรายการสินค้า (แบบ Grids)
![alt text](/ui/04.ChomCHOB-Example-Lists-On-Hover.png)
ภาพ 4.1   เมื่อนำเมาส์มาวางบนรายการสินค้า (แบบ Lists) 

---
### 2. Product detail
    รายละเอียดมีดังนี้
    1. หน้า Product detail จะแสดงผลรายละเอียดของสินค้า ตามภาพ
    2. จำนวนสินค้าสามารถกดเพิ่มได้
![alt text](/ui/05.ChomCHOB-Example-Product-Detail.png)
ภาพ 5. หน้าแสดงรายละเอียดสินค้า

---
### 3. API Service
##### URL
This is base url for call service
```
https://cc-mock-api.herokuapp.com
```

##### Product List
you can call product lists
```
GET /product
```
---

##### Product Detail
```
GET /product/:ID
```
###### Parameter:
    KEY           TYPE      EXAMPLE
    ID            string    PRO13
---

---
### 4. Conditions
    กำหนดให้มีการใช้งานเครื่องมือต่อไปนี้ 
    1. ReactJS, React-router, Redux
    2. สามารถใช้ Css Frameworks (Bulma, Boostrap, etc.) หรือเขียน Css เองทั้งหมดก็ได้
    3. สามารถใช้ Sass/Less ได้
    4. ระยะเวลาในการทำ 5 วัน

---
### ช่องทางการส่งงาน
ส่งงานโดยการอัพโหลดงานขึ้น Github และส่ง Link ของ Project นั้นมายัง
อีเมล์ chomchobth@chomchob.com
หัวข้อ ส่งแบบทดสอบ Front-end