<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>10 інстаграмних закладів Києва</title>
    <style>
        body {
            background-color: #f7d6e0; /* Пастельний рожевий */
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
        }
        h1 {
            font-size: 2em;
        }
        #countdown {
            display: flex;
            justify-content: center;
            gap: 10px;
            font-size: 1.5em;
            font-weight: bold;
        }
        .time-box {
            background: white;
            padding: 10px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <h1>10 інстаграмних закладів Києва</h1>
    <p>Ми готуємо для тебе список найкрасивіших кафе столиці. Залишилося зовсім трохи!</p>
    
    <div id="countdown">
        <div class="time-box"><span id="days"></span> днів</div>
        <div class="time-box"><span id="hours"></span> годин</div>
        <div class="time-box"><span id="minutes"></span> хвилин</div>
        <div class="time-box"><span id="seconds"></span> секунд</div>
    </div>
    
    <script>
        const countDownDate = new Date("2025-04-01T00:00:00").getTime(); // Встанови дату запуску
        const timer = setInterval(function() {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
            document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(timer);
                document.getElementById("countdown").innerHTML = "Сайт вже запущено!";
            }
        }, 1000);
    </script>
</body>
</html>