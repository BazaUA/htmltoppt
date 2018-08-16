const exportToPptx = () => {
  const pptx = new PptxGenJS();
  pptx.setLayout({ width: 15.5, height: 11.7 });
  pptx.addSlidesForTable('demo');
  pptx.save();
};
