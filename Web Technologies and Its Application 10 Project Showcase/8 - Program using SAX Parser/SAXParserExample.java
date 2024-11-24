import java.io.File;
import java.io.IOException;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

public class SAXParserExample {
    public static void main(String[] args) {
        try {
            // Create a SAXParserFactory instance
            SAXParserFactory factory = SAXParserFactory.newInstance();

            // Create a SAXParser instance
            SAXParser saxParser = factory.newSAXParser();

            // Define the custom handler
            DefaultHandler handler = new DefaultHandler() {
                boolean bId = false;
                boolean bName = false;
                boolean bGrade = false;

                // Called when the start of an XML element is found
                @Override
                public void startElement(String uri, String localName, String qName, Attributes attributes) throws SAXException {
                    if (qName.equalsIgnoreCase("id")) {
                        bId = true;
                    } else if (qName.equalsIgnoreCase("name")) {
                        bName = true;
                    } else if (qName.equalsIgnoreCase("grade")) {
                        bGrade = true;
                    }
                }

                // Called when text content is found between XML tags
                @Override
                public void characters(char ch[], int start, int length) throws SAXException {
                    if (bId) {
                        System.out.println("ID: " + new String(ch, start, length));
                        bId = false;
                    } else if (bName) {
                        System.out.println("Name: " + new String(ch, start, length));
                        bName = false;
                    } else if (bGrade) {
                        System.out.println("Grade: " + new String(ch, start, length));
                        bGrade = false;
                    }
                }

                // Called when the end of an XML element is found
                @Override
                public void endElement(String uri, String localName, String qName) throws SAXException {
                    if (qName.equalsIgnoreCase("student")) {
                        System.out.println("End of student");
                    }
                }
            };

            // Parse the XML file
            File inputFile = new File("students.xml");
            saxParser.parse(inputFile, handler);

        } catch (SAXException | ParserConfigurationException | IOException e) {
            // Log or print a more descriptive error message
            System.err.println("Error occurred while parsing XML: " + e.getMessage());
        }
    }
}
