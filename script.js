
    (function () {
      var button = document.querySelector('.menu-btn');
      var nav = document.getElementById('nav');
      button.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        button.setAttribute('aria-expanded', String(open));
        button.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
      });
      nav.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
          nav.classList.remove('open');
          button.setAttribute('aria-expanded', 'false');
          button.setAttribute('aria-label', 'Buka menu');
        }
      });

      var form = document.getElementById('motif-form');
      if (!form) { return; }
      var result = document.getElementById('motif-result');
      var recommendations = {
        tenang: {
          harian: ['Bambu', 'Ritme ruas bambu terasa ringan, luwes, dan mudah dipadukan untuk keseharian.'],
          acara: ['Anggrek Vanda Douglas', 'Lekuk bunga memberi aksen organik yang anggun untuk suasana istimewa.'],
          kerja: ['Bambu', 'Susunan garis yang rapi memberi kesan tenang sekaligus terstruktur.']
        },
        hangat: {
          harian: ['Kopi', 'Motif kopi membawa suasana akrab dan dekat dengan budaya berkumpul.'],
          acara: ['Kacang', 'Bentuk hasil bumi yang dekoratif menghadirkan karakter hangat dan berbeda.'],
          kerja: ['Kopi', 'Irama motif yang bersahaja cocok untuk tampilan kerja yang tidak kaku.']
        },
        tegas: {
          harian: ['Rumah Blandongan', 'Bentuk arsitekturalnya memberi identitas kuat pada tampilan sederhana.'],
          acara: ['Rumah Blandongan', 'Geometri bangunan tradisional tampil tegas dan mudah dikenali.'],
          kerja: ['Bambu', 'Garis berulang yang teratur terasa bersih, kuat, dan profesional.']
        }
      };
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var mood = document.getElementById('mood').value;
        var use = document.getElementById('use').value;
        var match = recommendations[mood][use];
        result.innerHTML = '<strong>' + match[0] + '</strong><p>' + match[1] + '</p>';
      });
    }());
  