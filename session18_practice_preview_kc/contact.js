// Mảng lưu trữ danh sách liên hệ
let contacts = [
    { name: 'Nguyễn Văn An', phone: '0901234567', email: 'nguyenvanan@email.com' },
    { name: 'Trần Thị Bình', phone: '0912345678', email: 'tranthibinh@email.com' },
    { name: 'Lê Văn Cường', phone: '0923456789', email: 'levancuong@email.com' },
    { name: 'Phạm Thị Dung', phone: '0934567890', email: 'phamthidung@email.com' },
    { name: 'Hoàng Văn Em', phone: '0945678901', email: 'hoangvanem@email.com' }
];

const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Lấy giá trị từ input
    const name = document.getElementById('contact-name').value.trim();
    const phone = document.getElementById('contact-phone').value.trim();
    const email = document.getElementById('contact-email').value.trim();

    // Validate
    if (!validateContact(name, phone, email)) {
        return;
    }

    // Xử lý thêm hoặc cập nhật
    if (editingIndex !== null) {
        // Cập nhật liên hệ
        contacts[editingIndex] = { name, phone, email };
        renderTable();
        editingIndex = null;
        const submitBtn = document.querySelector('.btn-add');
        submitBtn.textContent = 'Thêm';
        alert('Cập nhật liên hệ thành công!');
    } else {
        // Thêm liên hệ mới
        contacts.push({ name, phone, email });
        renderTable();
        alert('Thêm liên hệ thành công!');
    }

    // Reset form
    form.reset();
});

// Hàm validate contact
function validateContact(name, phone, email) {
    let isValid = true;

    // Validate tên
    if (name === '') {
        alert('Vui lòng nhập họ tên!');
        document.getElementById('contact-name').focus();
        isValid = false;
    } else if (name.length < 2) {
        alert('Họ tên phải có ít nhất 2 ký tự!');
        document.getElementById('contact-name').focus();
        isValid = false;
    }

    // Validate số điện thoại
    if (isValid && phone === '') {
        alert('Vui lòng nhập số điện thoại!');
        document.getElementById('contact-phone').focus();
        isValid = false;
    } else if (isValid && !/^0\d{9}$/.test(phone)) {
        alert('Số điện thoại phải bắt đầu bằng 0 và có 10 chữ số!');
        document.getElementById('contact-phone').focus();
        isValid = false;
    }

    // Validate email
    if (isValid && email === '') {
        alert('Vui lòng nhập email!');
        document.getElementById('contact-email').focus();
        isValid = false;
    } else if (isValid && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Email không hợp lệ!');
        document.getElementById('contact-email').focus();
        isValid = false;
    }

    return isValid;
}

// Hàm render bảng
function renderTable() {
    const tbody = document.getElementById('contact-tbody');
    tbody.innerHTML = '';

    contacts.forEach((contact, index) => {
        const tr = createTableRow(contact, index);
        tbody.appendChild(tr);
    });
}

// Tạo dòng trong bảng
function createTableRow(contact, index) {
    const tr = document.createElement('tr');

    // Tạo các cột
    const sttCell = document.createElement('td');
    sttCell.textContent = index + 1;

    const nameCell = document.createElement('td');
    nameCell.textContent = contact.name;

    const phoneCell = document.createElement('td');
    phoneCell.textContent = contact.phone;

    const emailCell = document.createElement('td');
    emailCell.textContent = contact.email;

    // Tạo nút Sửa và Xóa
    const actionCell = document.createElement('td');
    const actionDiv = document.createElement('div');
    actionDiv.className = 'action-buttons';

    const editBtn = document.createElement('button');
    editBtn.className = 'btn-edit';
    editBtn.textContent = 'Sửa';
    editBtn.onclick = () => editContact(index);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-delete';
    deleteBtn.textContent = 'Xóa';
    deleteBtn.onclick = () => deleteContact(index);

    actionDiv.appendChild(editBtn);
    actionDiv.appendChild(deleteBtn);
    actionCell.appendChild(actionDiv);

    tr.appendChild(sttCell);
    tr.appendChild(nameCell);
    tr.appendChild(phoneCell);
    tr.appendChild(emailCell);
    tr.appendChild(actionCell);

    return tr;
}


// Lưu trạng thái đang sửa
let editingIndex = null;

// Khi click Sửa
function editContact(index) {
    editingIndex = index;
    const contact = contacts[index];

    // Điền dữ liệu vào form
    document.getElementById('contact-name').value = contact.name;
    document.getElementById('contact-phone').value = contact.phone;
    document.getElementById('contact-email').value = contact.email;

    // Đổi text nút
    const submitBtn = document.querySelector('.btn-add');
    submitBtn.textContent = 'Cập nhật';
}

// Khi click Xóa
function deleteContact(index) {
    if (confirm('Bạn có chắc chắn muốn xóa liên hệ này?')) {
        contacts.splice(index, 1);
        renderTable();
        alert('Xóa liên hệ thành công!');
    }
}

// Khởi tạo bảng khi trang load
document.addEventListener('DOMContentLoaded', renderTable);
