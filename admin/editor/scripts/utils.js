function sanitizeText(text) {
    return text.replace(/\.\s+/g, '.').replace(/\s+$/, '');  // Remove extra spaces
}

function generateUniqueID(title, number) {
    let currentDate = new Date();
    const datePart = `${currentDate.getFullYear()}${String(currentDate.getMonth() + 1).padStart(2, '0')}${String(currentDate.getDate()).padStart(2, '0')}`;
    let initials = title.substring(0, 2).toLowerCase();
    return `${datePart}${initials}${number}`;
}
