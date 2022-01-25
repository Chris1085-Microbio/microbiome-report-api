const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>腸生態健康報告</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Passion+One&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./assets/style/style.css" />
  </head>

  <body>
    <div class="container-A4" size="A4">
      <!-- p1 -->
      <page size="A4">
        <header>
          <div class="logo-container"></div>
        </header>

        <div class="cover d-flex flex-column align-items-center justify-content-center">
          <!-- <div class="logo-container-xl d-flex flex-column justify-content-center align-items-center"></div> -->
          <h1 class="text-center">個人化腸生態<br />健康管理</h1>
          <h3 class="text-center subtitle pt-2"><span>Precision</span> Nutrition</h3>
          <div class="test"></div>
        </div>
      </page>
`
module.exports = htmlTemplate
