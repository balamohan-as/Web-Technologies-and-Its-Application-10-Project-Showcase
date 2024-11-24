function generateMarkList() {
    // Get form values
    const studentName = document.getElementById('studentName').value;
    const studentClass = document.getElementById('studentClass').value;
    
    const subject1Name = document.getElementById('subject1Name').value;
    const subject1Marks = document.getElementById('subject1Marks').value;
    
    const subject2Name = document.getElementById('subject2Name').value;
    const subject2Marks = document.getElementById('subject2Marks').value;
    
    const subject3Name = document.getElementById('subject3Name').value;
    const subject3Marks = document.getElementById('subject3Marks').value;
    
    const subject4Name = document.getElementById('subject4Name').value;
    const subject4Marks = document.getElementById('subject4Marks').value;
    
    const subject5Name = document.getElementById('subject5Name').value;
    const subject5Marks = document.getElementById('subject5Marks').value;

    // Calculate total and average marks
    const totalMarks = parseInt(subject1Marks) + parseInt(subject2Marks) + parseInt(subject3Marks) + parseInt(subject4Marks) + parseInt(subject5Marks);
    const averageMarks = totalMarks / 5;

    // Display the result in the HTML
    const resultHTML = `
        <h2>Mark List</h2>
        <p><strong>Student Name:</strong> ${studentName}</p>
        <p><strong>Class:</strong> ${studentClass}</p>
        <table>
            <tr>
                <th>Subject</th>
                <th>Marks</th>
            </tr>
            <tr>
                <td>${subject1Name}</td>
                <td>${subject1Marks}</td>
            </tr>
            <tr>
                <td>${subject2Name}</td>
                <td>${subject2Marks}</td>
            </tr>
            <tr>
                <td>${subject3Name}</td>
                <td>${subject3Marks}</td>
            </tr>
            <tr>
                <td>${subject4Name}</td>
                <td>${subject4Marks}</td>
            </tr>
            <tr>
                <td>${subject5Name}</td>
                <td>${subject5Marks}</td>
            </tr>
            <tr>
                <th>Total Marks</th>
                <td>${totalMarks}</td>
            </tr>
            <tr>
                <th>Average Marks</th>
                <td>${averageMarks.toFixed(2)}</td>
            </tr>
        </table>
        <button id="downloadPDF" onclick="generatePDF()">Download PDF</button>
    `;

    document.getElementById('markListResult').innerHTML = resultHTML;
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const studentName = document.getElementById('studentName').value;
    const studentClass = document.getElementById('studentClass').value;
    
    const subject1Name = document.getElementById('subject1Name').value;
    const subject1Marks = document.getElementById('subject1Marks').value;
    
    const subject2Name = document.getElementById('subject2Name').value;
    const subject2Marks = document.getElementById('subject2Marks').value;
    
    const subject3Name = document.getElementById('subject3Name').value;
    const subject3Marks = document.getElementById('subject3Marks').value;
    
    const subject4Name = document.getElementById('subject4Name').value;
    const subject4Marks = document.getElementById('subject4Marks').value;
    
    const subject5Name = document.getElementById('subject5Name').value;
    const subject5Marks = document.getElementById('subject5Marks').value;

    const totalMarks = parseInt(subject1Marks) + parseInt(subject2Marks) + parseInt(subject3Marks) + parseInt(subject4Marks) + parseInt(subject5Marks);
    const averageMarks = totalMarks / 5;

    // Add content to the PDF
    doc.setFontSize(18);
    doc.text('Mark List', 105, 20, null, null, 'center');

    doc.setFontSize(12);
    doc.text(`Student Name: ${studentName}`, 20, 40);
    doc.text(`Class: ${studentClass}`, 20, 50);

    // Add subject and marks
    doc.text(`Subject: ${subject1Name}`, 20, 70);
    doc.text(`Marks: ${subject1Marks}`, 150, 70);

    doc.text(`Subject: ${subject2Name}`, 20, 80);
    doc.text(`Marks: ${subject2Marks}`, 150, 80);

    doc.text(`Subject: ${subject3Name}`, 20, 90);
    doc.text(`Marks: ${subject3Marks}`, 150, 90);

    doc.text(`Subject: ${subject4Name}`, 20, 100);
    doc.text(`Marks: ${subject4Marks}`, 150, 100);

    doc.text(`Subject: ${subject5Name}`, 20, 110);
    doc.text(`Marks: ${subject5Marks}`, 150, 110);

    // Add total and average marks
    doc.text(`Total Marks: ${totalMarks}`, 20, 130);
    doc.text(`Average Marks: ${averageMarks.toFixed(2)}`, 150, 130);

    // Save the PDF
    doc.save(`${studentName}_MarkList.pdf`);
}
