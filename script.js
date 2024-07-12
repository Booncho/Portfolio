document.addEventListener('DOMContentLoaded', function() {
    const texts = ["I Am CHANAKIT", "I Am Web Developer"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    
    function type() {
        if (index < currentText.length) {
            letter = currentText.slice(0, ++index);
            document.getElementById('typing-text').textContent = letter;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000); // Pause before erasing
        }
    }
    
    function erase() {
        if (index > 0) {
            letter = currentText.slice(0, --index);
            document.getElementById('typing-text').textContent = letter;
            setTimeout(erase, 50);
        } else {
            count = (count + 1) % texts.length;
            currentText = texts[count];
            setTimeout(type, 500); // Pause before typing the next text
        }
    }
    
    function startTyping() {
        currentText = texts[count];
        type();
    }
    
    startTyping();
});

function showContent(id) {
    // Hide all content divs
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.style.display = 'none');
    
    // Show the selected content div
    document.getElementById(id).style.display = 'block';
}
document.addEventListener("DOMContentLoaded", function() {
    function animateProgressBars() {
        const progressSpans = document.querySelectorAll('.progress-line span');
        progressSpans.forEach(span => {
            const progress = span.getAttribute('data-progress');
            span.style.width = '0';
            setTimeout(() => {
                span.style.width = progress + '%';
            }, 1000); // เพิ่มเวลาหน่วงเล็กน้อยก่อนเริ่มแอนิเมชัน
        });
    }

    animateProgressBars(); // เริ่มการแอนิเมชันเมื่อหน้าเว็บโหลดเสร็จ

    setInterval(() => {
        animateProgressBars(); // รีเซ็ตและเริ่มการแอนิเมชันใหม่ทุกๆ 10 วินาที
    }, 10000); // 10000 มิลลิวินาที = 10 วินาที
});
// IF sent email
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        event.preventDefault();
        alert('กรุณากรอกข้อมูลทุกช่องก่อนส่งข้อความ');
    }
});

// Axtive Scroll
