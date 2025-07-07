# speed-test-game
Speed test game using typescript

- Init npm project [package.json]<br>
npm init -y

- Install tools [Pug.js & SASS & Typescript] with concurrently<br>
npm install -D pug-cli sass typescript concurrently

- Add watch in package.json to execuxtion and watching all files at the same time<br>
![Image](https://github.com/user-attachments/assets/a52bf544-20e1-4f87-8e37-13cb0c43742a)
"watch": "concurrently \"pug src/pug/views --out dist --watch -P --basedir src/pug\" \"sass --watch src/styles:dist/styles --load-path=src/styles\" \"tsc --watch\""

- Install normalize<br>
npm install normalize.css

- Create Typescript config file<br>
npx tsc --init

- Change rootDir to ["./src/scripts"] & outDir to ["./dist/scripts"]<br>
![Image](https://github.com/user-attachments/assets/a1a0db1e-6573-4d89-bf4b-f9d4bd19c9cd)

- Watch all files<br>
npm run watch

<img width="1353" height="849" alt="Image" src="https://github.com/user-attachments/assets/d0a5849d-a7b4-4ddd-81ff-17c744380c6f" />
