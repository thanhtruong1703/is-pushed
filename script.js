function save(){
    const { Document, Packer, Paragraph, TextRun } = require("docx");
    const { saveAs } = require("file-saver");
    
    // Tạo tài liệu mới
    const doc = new Document({
        sections: [
            {
                properties: {},
                children: [
                    new Paragraph({
                        children: [
                            new TextRun("Đây là đoạn văn đầu tiên."),
                            new TextRun({
                                text: "Đây là đoạn văn thứ hai.",
                                bold: true,
                            }),
                            new TextRun({
                                text: "\n",
                            }),
                        ],
                    }),
                ],
            },
        ],
    });
    
    // Gói tài liệu thành file .docx và lưu
    Packer.toBlob(doc).then((blob) => {
        saveAs(blob, "document.docx");
    });
    

}

