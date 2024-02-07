<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>dj daniel petric.</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet">
    <style>
        
        nav a.active {
            width:auto;
            background-color: #787070;
            color: rgb(255, 255, 255);
        }

        body {
            background-image: url('slike/djbg.jpg');
            background-size: cover;
            margin: 0;
        }

        nav {
            display: flex;
            align-items: center;
            background-color: #000000; 
            height: 100px; 
        }

        .logo {
            height: 100px;
            padding-left: 20px;
            margin-right: auto;
            overflow: hidden;
        }

        nav a {
            color: white;
    text-decoration: none;
    padding: 20px; /* Ažurirano */
    margin: 0 10px;
    width: 100px; /* Ažurirano */
    flex-grow: 1;
}
            
           
            
      

        nav a:hover {
            background-color: #ddd;
            color: black;
        }

        @media screen and (max-width: 600px) {
            nav a {
                float: none;
                display: block;
                width: 100%;
                text-align: left;
            }
        }

        .citat {
            font-family: 'Dancing Script', cursive;
            font-size: 30px;
            padding: 20px;
            margin: 80px 0 0 50px;
        }

        .bijela_boja {
            color: white;
        }

        main {
            padding: 0;
            color: white;
        }

        footer {
            position: fixed;
            bottom: 0;
            width: 100%;
            text-align: center;
            font-size: 14px;
            color: #ffffff;
            margin-bottom: 0;
        }

        .drustvene_mreze {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 0;      
        }

        .drustvene_mreze img {
            width: 30px; 
            height: 30px; 
            margin: 0 5px;
        }

        .datum_i_sat {
            position: fixed;
            bottom: 0;
            right: 0;
            text-align: right; 
            margin-right: 20px;  
        }

    </style>
</head>
<body>

  <nav>
    <img src="slike/logo.png" alt="Logo" class="logo">
    <a href="dj daniel petric.html" class="active" >POČETNA</a>
    <a href="o meni.html" >O MENI</a>
    <a href="usluge.html">USLUGE</a>
    <a href="kontakt.html">KONTAKT</a>
</nav>



    <div class="citat">
        <p>"I love to make people dance,<br>it's a way of bringing people together <br>
            regardless of religion, nationality, sexuality, belief."
                 <br><span class="bijela_boja">David Guetta</span></p>
    </div>

    <footer>
        <div class="drustvene_mreze">
            <a href="https://www.facebook.com/danijel.petric.14?sfnsn=wa" target="_blank"><img src="slike/Facebook logo.png" alt="Facebook" class="drustvene_mreze"></a>
            <a href="https://www.mixcloud.com/danielpetric/" target="_blank"><img src="slike/MixCloud logo.png" alt="Mixcloud" class="drustvene_mreze"></a>
            <a href="https://www.instagram.com/djdanielpetric/" target="_blank"><img src="slike/Instagram logo.png" alt="Instagram" class="drustvene_mreze"></a>
            <a href="https://www.tiktok.com/@djdanielpetric?is_from_webapp=1&sender_device=pc" target="_blank"><img src="slike/tik-tok logo.png" alt="TikTok" class="drustvene_mreze"></a>
            <a href="https://soundcloud.com/djdanielpetric?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank"><img src="slike/SoundCloud logo.jpg" alt="SoundCloud" class="drustvene_mreze"></a>
        </div>

        <div class="datum_i_sat">
            <p id="datum_i_sat"></p>
        </div>

        <p>&copy; 2024 daniel petric. Sva prava zadržana.</p>

        

       
    </footer>

    <script src="JavaScript/datum_i_sat.js"></script>
</body>
</html>
