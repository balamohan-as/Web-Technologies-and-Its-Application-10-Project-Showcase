<?xml version="1.0"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h2><center>STUDENT DATABASE</center></h2>
                <table align="center" border="5" cellpadding="20">
                    <tr bgcolor="#2F4F4F">
                        <th style="color: #FFFFFF;">rollno</th>
                        <th style="color: #FFFFFF;">name</th>
                        <th style="color: #FFFFFF;">department</th>
                        <th style="color: #FFFFFF;">marks</th>
                        <th style="color: #FFFFFF;">percentage</th>
                    </tr>
                    <xsl:for-each select="student/Person-Details">
                        <xsl:sort select="percentage"/>
                        <tr bgcolor="#F5EFFF">
                            <td><xsl:value-of select="rollno"/></td>
                            <td><xsl:value-of select="name"/></td>
                            <td><xsl:value-of select="department"/></td>
                            <td><xsl:value-of select="marks"/></td>
                            <td><xsl:value-of select="percentage"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
