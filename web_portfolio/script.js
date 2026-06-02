/*
 * Portfolio asset-path configuration
 * IMPORTANT: index.html is inside: BKS_DƯƠNG TUẤN DŨNG/web_portfolio/
 * The evidence folders are outside web_portfolio, so every evidence path starts with ../
 */

const PATHS = {
    academicAwards: '../c. Giải thưởng thành tích ( academic)',
    iotProject: '../a. Sản phẩm cá nhân_Chậu cây IoT',
    iotClassImages: '../a. Sản phẩm cá nhân_Chậu cây IoT/Hình ảnh công việc trên lớp',
    nonAcademic: '../d. Hoạt động khác (Non-academic_ CLB, thiện nguyện, hoạt động xã hội, ...)',
    warmWinter: '../d. Hoạt động khác (Non-academic_ CLB, thiện nguyện, hoạt động xã hội, ...)/Mùa đông ấm 2025',
    academicRecords: '../3. Tình trạng hồ sơ học thuật (bảng điểm, thư giới thiệu, chứng chỉ, essay, v.v.)',
    ieltsSatAp: '../3. Tình trạng hồ sơ học thuật (bảng điểm, thư giới thiệu, chứng chỉ, essay, v.v.)/b. IELTS, SAT, AP'
};

function p(base, fileName) {
    return `${base}/${fileName}`;
}

const studentEvents = [
    {
        id: 'dung_iot',
        title: 'Personal Project: Smart IoT Plant Pot Automation System',
        category: 'Engineering Projects',
        date: '2025',
        desc: 'Built a microcontroller-based environmental monitoring system using sensors, relay control, and a water pump. This evidence package links directly to the report, poster, demo video, and class-work images stored in the original project folder.',
        assets: [
            {
                name: 'Bản sao của BAO_CAO_CHAU_CAY_THONG_MINH.pdf',
                path: p(PATHS.iotProject, 'Bản sao của BAO_CAO_CHAU_CAY_THONG_MINH.pdf'),
                type: 'pdf'
            },
            {
                name: 'Bản sao của Poster Tuấn Dũng.pptx',
                path: p(PATHS.iotProject, 'Bản sao của Poster Tuấn Dũng.pptx'),
                type: 'presentation'
            },
            {
                name: 'Bản sao của SPCN Tuấn Dũng.mp4',
                path: p(PATHS.iotProject, 'Bản sao của SPCN Tuấn Dũng.mp4'),
                type: 'video'
            },
            {
                name: 'Bản sao của z720705101980_851c111fb7c26c851da7b670436d453b.jpg',
                path: p(PATHS.iotProject, 'Bản sao của z720705101980_851c111fb7c26c851da7b670436d453b.jpg'),
                type: 'image'
            },
            {
                name: 'Class-work image folder',
                path: PATHS.iotClassImages,
                type: 'folder'
            }
        ]
    },
    {
        id: 'dung_icpc',
        title: 'Gold Medal Recognition — ICPC 2026',
        category: 'Academic Competitions',
        date: '2026',
        desc: 'Academic competition evidence and certificate files are stored inside the “c. Giải thưởng thành tích ( academic)” folder. The ICPC folder is linked directly for quick access.',
        assets: [
            {
                name: 'ICPC 2026 folder',
                path: p(PATHS.academicAwards, 'ICPC 2026'),
                type: 'folder'
            },
            {
                name: 'Bản quét lúc 22_54_07, ngày 11 thg 11, 2025.pdf',
                path: p(PATHS.academicAwards, 'Bản quét lúc 22_54_07, ngày 11 thg 11, 2025.pdf'),
                type: 'pdf'
            }
        ]
    },
    {
        id: 'dung_math',
        title: 'Mathematics & Academic Achievement Certificates',
        category: 'Academic Competitions',
        date: '2024-2026',
        desc: 'Linked academic certificates include city-level excellent student results, outstanding student recognition, district mathematics prizes, and combined district/city mathematics evidence.',
        assets: [
            {
                name: 'HS giỏi cấp thành phố.pdf',
                path: p(PATHS.academicAwards, 'HS giỏi cấp thành phố.pdf'),
                type: 'pdf'
            },
            {
                name: 'HS xuất sắc.pdf',
                path: p(PATHS.academicAwards, 'HS xuất sắc.pdf'),
                type: 'pdf'
            },
            {
                name: 'Nhi toán cấp quận.pdf',
                path: p(PATHS.academicAwards, 'Nhi toán cấp quận.pdf'),
                type: 'pdf'
            },
            {
                name: 'Nhi toán Quận & Thành phố.pdf',
                path: p(PATHS.academicAwards, 'Nhi toán Quận & Thành phố.pdf'),
                type: 'pdf'
            }
        ]
    },
    {
        id: 'dung_scores',
        title: 'IELTS, SAT & Academic Records',
        category: 'Academic Records',
        date: '2025-2026',
        desc: 'This package links to the IELTS/SAT/AP folder and the SAT digital score PDF shown in the academic achievement folder.',
        assets: [
            {
                name: 'ielts.pdf',
                path: p(PATHS.ieltsSatAp, 'ielts.pdf'),
                type: 'pdf'
            },
            {
                name: 'digital_sat_k12_student_weekend_148062945_2f69190-a38c-47dd-a270-f59ed54d5a43.pdf',
                path: p(PATHS.academicAwards, 'digital_sat_k12_student_weekend_148062945_2f69190-a38c-47dd-a270-f59ed54d5a43.pdf'),
                type: 'pdf'
            },
            {
                name: 'a. Bảng điểm 10, 11, 12 folder',
                path: p(PATHS.academicRecords, 'a. Bảng điểm 10, 11, 12'),
                type: 'folder'
            }
        ]
    },
    {
        id: 'dung_nonacademic',
        title: 'Non-Academic Activities & Community Evidence',
        category: 'Activities & Community',
        date: '2023-2025',
        desc: 'Volunteer, club, and social activity evidence linked from the non-academic folder, including Warm Winter 2025 and scanned activity certificates.',
        assets: [
            {
                name: 'Mùa đông ấm 2025 folder',
                path: p(PATHS.nonAcademic, 'Mùa đông ấm 2025'),
                type: 'folder'
            },
            {
                name: 'Muadongam_(1).jpg',
                path: p(PATHS.warmWinter, 'Muadongam_(1).jpg'),
                type: 'image'
            },
            {
                name: 'Bản quét lúc 21_51_23, ngày 28 thg 10, 2025.pdf',
                path: p(PATHS.nonAcademic, 'Bản quét lúc 21_51_23, ngày 28 thg 10, 2025.pdf'),
                type: 'pdf'
            },
            {
                name: 'Bản quét lúc 21_53_20, ngày 28 thg 10, 2025.pdf',
                path: p(PATHS.nonAcademic, 'Bản quét lúc 21_53_20, ngày 28 thg 10, 2025.pdf'),
                type: 'pdf'
            },
            {
                name: 'Bản quét lúc 21_53_46, ngày 28 thg 10, 2025.pdf',
                path: p(PATHS.nonAcademic, 'Bản quét lúc 21_53_46, ngày 28 thg 10, 2025.pdf'),
                type: 'pdf'
            },
            {
                name: 'Bản quét lúc 21_56_02, ngày 28 thg 10, 2025.pdf',
                path: p(PATHS.nonAcademic, 'Bản quét lúc 21_56_02, ngày 28 thg 10, 2025.pdf'),
                type: 'pdf'
            },
            {
                name: 'Vice-head - Stem - hòa bình.heic',
                path: p(PATHS.nonAcademic, 'Vice-head - Stem - hòa bình.heic'),
                type: 'file'
            }
        ]
    },
    {
        id: 'dung_chess',
        title: 'Chess & School Recognition Certificates',
        category: 'Activities & Awards',
        date: '2023-2025',
        desc: 'Direct links to the activity PDFs numbered 1–4 from the extracurricular evidence folder.',
        assets: [
            { name: '1.pdf', path: '../2. Hoạt động ngoại khóa (sản phẩm cá nhân, cuộc thi, CLB, thiện nguyện, hoạt động xã hội, ...)/1.pdf', type: 'pdf' },
            { name: '2.pdf', path: '../2. Hoạt động ngoại khóa (sản phẩm cá nhân, cuộc thi, CLB, thiện nguyện, hoạt động xã hội, ...)/2.pdf', type: 'pdf' },
            { name: '3.pdf', path: '../2. Hoạt động ngoại khóa (sản phẩm cá nhân, cuộc thi, CLB, thiện nguyện, hoạt động xã hội, ...)/3.pdf', type: 'pdf' },
            { name: '4.pdf', path: '../2. Hoạt động ngoại khóa (sản phẩm cá nhân, cuộc thi, CLB, thiện nguyện, hoạt động xã hội, ...)/4.pdf', type: 'pdf' }
        ]
    }
];

function updateSensorValues() {
    const moistureValue = document.getElementById('slider-moisture').value;
    const tempValue = document.getElementById('slider-temp').value;

    document.getElementById('val-moisture').innerText = moistureValue + '%';
    document.getElementById('val-temp').innerText = tempValue + '°C';

    const relayBulb = document.getElementById('relay-status');
    const statusText = document.getElementById('status-text');
    const serialLogs = document.getElementById('serial-logs');
    const currentTimeString = new Date().toLocaleTimeString();
    let computedTelemetryLog = '';

    if (parseInt(moistureValue) < 40) {
        relayBulb.innerText = 'ON';
        relayBulb.className = 'relay-bulb on';
        statusText.innerHTML = 'Relay status: <span style="color:var(--accent2); font-weight:700;">ON</span> — Soil moisture is critically low. Water pump activated.';
        computedTelemetryLog = `[${currentTimeString}] [ESP32] Moisture: ${moistureValue}%. Threshold breached. GPIO relay HIGH -> Pump started.`;
    } else {
        relayBulb.innerText = 'OFF';
        relayBulb.className = 'relay-bulb';
        statusText.innerHTML = 'Relay status: <span style="color:var(--text-muted);">OFF</span> — Soil moisture is balanced.';
        computedTelemetryLog = `[${currentTimeString}] [ESP32] Moisture: ${moistureValue}%. Status nominal. GPIO relay LOW -> Pump stopped.`;
    }

    serialLogs.innerHTML += `<br>${computedTelemetryLog}`;
    serialLogs.scrollTop = serialLogs.scrollHeight;
}

function getAssetIcon(asset) {
    if (asset.type === 'pdf') return '<i class="far fa-file-pdf"></i><span>PDF</span>';
    if (asset.type === 'video') return '<i class="far fa-file-video"></i><span>VIDEO</span>';
    if (asset.type === 'presentation') return '<i class="far fa-file-powerpoint"></i><span>PPT</span>';
    if (asset.type === 'folder') return '<i class="far fa-folder-open"></i><span>FOLDER</span>';
    return '<i class="far fa-file"></i><span>FILE</span>';
}

function getAssetAction(asset) {
    if (asset.type === 'pdf') return '<i class="fas fa-external-link-alt"></i> Open in new tab';
    if (asset.type === 'video') return '<i class="fas fa-play"></i> Play Video';
    if (asset.type === 'presentation') return '<i class="fas fa-file-powerpoint"></i> Open Presentation';
    if (asset.type === 'folder') return '<i class="fas fa-folder-open"></i> Open Folder';
    if (asset.type === 'image') return '<i class="fas fa-expand-alt"></i> Fullscreen Image';
    return '<i class="fas fa-external-link-alt"></i> Open File';
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function renderAssetPreview(asset) {
    const safeName = escapeHtml(asset.name);
    const safePath = escapeHtml(asset.path);

    if (asset.type === 'pdf') {
        return `
            <iframe
                class="pdf-frame"
                src="${safePath}#toolbar=0&navpanes=0&scrollbar=0"
                title="${safeName}"
                loading="lazy">
            </iframe>
        `;
    }

    if (asset.type === 'image') {
        return `<img src="${safePath}" alt="${safeName}" loading="lazy">`;
    }

    if (asset.type === 'video') {
        return `<video src="${safePath}" controls preload="metadata"></video>`;
    }

    return `<div class="pdf-preview-placeholder">${getAssetIcon(asset)}</div>`;
}

function openEventModal(eventId) {
    const eventObj = studentEvents.find(e => e.id === eventId);
    if (!eventObj) return;

    document.getElementById('event-modal-cat').innerText = eventObj.category;
    document.getElementById('event-modal-date').innerText = eventObj.date;
    document.getElementById('event-modal-title').innerText = eventObj.title;
    document.getElementById('event-modal-desc').innerText = eventObj.desc;

    const galleryContainer = document.getElementById('event-modal-gallery');
    galleryContainer.innerHTML = '';

    if (eventObj.assets && eventObj.assets.length > 0) {
        eventObj.assets.forEach(asset => {
            const cardElement = document.createElement('div');
            cardElement.className = `gallery-card ${asset.type === 'pdf' ? 'pdf-card' : ''} ${asset.type === 'video' ? 'video-card' : ''}`;

            const preview = renderAssetPreview(asset);
            const safeName = escapeHtml(asset.name);
            const safePath = escapeHtml(asset.path);

            cardElement.innerHTML = `
                <div class="card-img-wrapper">${preview}</div>
                <div class="card-info">
                    <h4 title="${safeName}">${safeName}</h4>
                    <a href="${safePath}" target="_blank" rel="noopener" class="view-btn">${getAssetAction(asset)}</a>
                </div>
            `;
            galleryContainer.appendChild(cardElement);
        });

        galleryContainer.querySelectorAll('.gallery-card img').forEach(image => {
            image.style.cursor = 'zoom-in';
            image.addEventListener('click', event => {
                event.preventDefault();
                event.stopPropagation();
                openImageZoomModal(image.getAttribute('src'), image.alt);
            });
        });
    } else {
        galleryContainer.innerHTML = '<p class="no-assets-msg">No verification assets are linked to this project yet.</p>';
    }

    document.getElementById('event-details-modal').style.display = 'flex';
}

function closeEventModal() {
    document.getElementById('event-details-modal').style.display = 'none';
}

function openImageZoomModal(imageSource, imageAltCaption) {
    const mainImgModal = document.getElementById('image-modal');
    const innerZoomedImg = document.getElementById('modal-img');
    const modalCaption = document.getElementById('caption');

    mainImgModal.style.display = 'block';
    innerZoomedImg.src = imageSource;
    modalCaption.innerHTML = imageAltCaption;
}

document.querySelector('.close-modal')?.addEventListener('click', () => {
    document.getElementById('image-modal').style.display = 'none';
});

window.addEventListener('click', (clickEvent) => {
    const detailModalWrapper = document.getElementById('event-details-modal');
    const imageModalWrapper = document.getElementById('image-modal');
    if (clickEvent.target === detailModalWrapper) closeEventModal();
    if (clickEvent.target === imageModalWrapper) imageModalWrapper.style.display = 'none';
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeEventModal();
        document.getElementById('image-modal').style.display = 'none';
    }
});
