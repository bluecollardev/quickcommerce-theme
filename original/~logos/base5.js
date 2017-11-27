
function logoElementbase5()
{
			
	
	if (navigator.userAgent.indexOf("Mozilla/3") != -1)
	{
		var msg = 'Sorry, since you are using an old version of Netscape, you may not be able to access all the pages in this Web site.';	
		document.write(msg);
	}
	else 
	{
		
		var strHTML = '';

				strHTML += '<a  href="' + ''+ 'http://www.base5media.com"';
				strHTML += ' target="_blank" >';
				strHTML += '	<img src="' + strRelativePathToRoot + 'publishImages/logo_base5B.jpg"';
				strHTML += ' alt=""';
				strHTML += ' border="0"';
				strHTML += ' width="353"';
				strHTML += ' height="19" >';
				strHTML += '</a>';

		
		document.write(strHTML);
	}
}

		
function netscapeDivCheckbase5()
{
	
				 			
				
				
	var strAppName = navigator.appName;
	var appVer = parseFloat(navigator.appVersion);
								
	if ( (strAppName == "Netscape") &&
		(appVer >= 4.0 && appVer < 5) ) {  
		document.write("</DIV>");
	}
}
			
			
		
logoElementbase5();
			
		
netscapeDivCheckbase5();
	