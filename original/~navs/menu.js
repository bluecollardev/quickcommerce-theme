
		var nav_menu = new Object();

		nav_menu.tabCategory="basic";
		nav_menu.holidayButton="Christmas_Ornaments";
		nav_menu.mouseoverEffect="true";
		nav_menu.mouseoverBold="false";
		nav_menu.modernButton="Basic_Black";
		nav_menu.mouseoverBgcolor="";
		nav_menu.textColor="#FFFFFF";
		nav_menu.accentType="lines";
		nav_menu.hasLinks="true";
		nav_menu.bold="false";
		nav_menu.lineWidth="1";
		nav_menu.mouseoverTextcolor="#F4CE53";
		nav_menu.accentColor="Black";
		nav_menu.type="Navigation";
		nav_menu.mouseoverUnderline="false";
		nav_menu.selectedEffect="true";
		nav_menu.justification="left";
		nav_menu.simpleButton="Autumn_Leaves";
		nav_menu.basicTab="White";
		nav_menu.selectedUnderline="false";
		nav_menu.localPreview="false";
		nav_menu.orientation="vertical";
		nav_menu.lineColor="#C7BDAE";
		nav_menu.buttonCategory="basic";
		nav_menu.imageHeight="31";
		nav_menu.squareTab="Camel";
		nav_menu.dirty="false";
		nav_menu.navID="nav_menu";
		nav_menu.selectedItalic="false";
		nav_menu.textFont="Comic Sans MS";
		nav_menu.texturedButton="Brick";
		nav_menu.importedImageSelected="";
		nav_menu.background="";
		nav_menu.imageWidth="114";
		nav_menu.selectedBold="false";
		nav_menu.accentStyle="Arrow";
		nav_menu.numLinks="10";
		nav_menu.underline="false";
		nav_menu.mouseoverItalic="false";
		nav_menu.verticalSpacing="25";
		nav_menu.funButton="Arts_and_Crafts";
		nav_menu.horizontalWrap="5";
		nav_menu.style="text";
		nav_menu.basicButton="Gray";
		nav_menu.importedImageMouseOver="";
		nav_menu.selectedBgcolor="";
		nav_menu.graphicSelected="true";
		nav_menu.border="";
		nav_menu.shinyButton="Shiny_Aqua";
		nav_menu.selectedTextcolor="#F4CE53";
		nav_menu.sophisticatedButton="Antique";
		nav_menu.version="5";
		nav_menu.horizontalSpacing="35";
		nav_menu.graphicMouseover="true";
		nav_menu.italic="false";
		nav_menu.importedImage="";
		nav_menu.darkButton="Basic_Black";
		nav_menu.brightButton="Chicky";
		nav_menu.textSize="12";
		
		nav_menu.navName = "menu";
		nav_menu.imagePath = "";
		nav_menu.selectedImagePath = "/~media/elements/LayoutClipart/Accent_Arrow_Black_Selected";
		nav_menu.mouseOverImagePath = "/~media/elements/LayoutClipart/Accent_Arrow_Black_Selected";
		nav_menu.imageWidth = "16";
		nav_menu.imageHeight = "16";
		nav_menu.fontClass = "size12 ComicSansMS12";
		nav_menu.fontFace = "'Comic Sans MS', Arial, Helvetica, sans-serif";

		
		
		var baseHref = '';
		
		if (document.getElementsByTagName)
		{
			
			var base = document.getElementsByTagName('base');
			
			if (base && base.length > 0)
			{
				
				if (base[0].href != undefined)
				{
					
					baseHref = base[0].href;
					
					if (baseHref != '' && baseHref.charAt(baseHref.length - 1) != '/')
					{
						baseHref += '/';
					}
				}
			}
		}
		
		nav_menu.links=new Array(10);
	
		
		var nav_menu_Link1 = new Object();
		nav_menu_Link1.type = "existing";
		nav_menu_Link1.displayName = "Pho&nbsp;Play&nbsp;(Appetizers)";
		nav_menu_Link1.linkWindow = "_self";
		nav_menu_Link1.linkValue = "menu_phoplay.html";
		nav_menu_Link1.linkIndex = "1";
		nav_menu.links[0] = nav_menu_Link1;

		var nav_menu_Link2 = new Object();
		nav_menu_Link2.type = "existing";
		nav_menu_Link2.displayName = "Goi&nbsp;Cuon&nbsp;(Salad&nbsp;Rolls)";
		nav_menu_Link2.linkWindow = "_self";
		nav_menu_Link2.linkValue = "menu_goicuon.html";
		nav_menu_Link2.linkIndex = "2";
		nav_menu.links[1] = nav_menu_Link2;

		var nav_menu_Link3 = new Object();
		nav_menu_Link3.type = "existing";
		nav_menu_Link3.displayName = "Goi&nbsp;&nbsp;(Salads)";
		nav_menu_Link3.linkWindow = "_self";
		nav_menu_Link3.linkValue = "menu_goisalads.html";
		nav_menu_Link3.linkIndex = "3";
		nav_menu.links[2] = nav_menu_Link3;

		var nav_menu_Link4 = new Object();
		nav_menu_Link4.type = "existing";
		nav_menu_Link4.displayName = "Hu&nbsp;Tieu&nbsp;&nbsp;(Soups)";
		nav_menu_Link4.linkWindow = "_self";
		nav_menu_Link4.linkValue = "menu_hutieu.html";
		nav_menu_Link4.linkIndex = "4";
		nav_menu.links[3] = nav_menu_Link4;

		var nav_menu_Link5 = new Object();
		nav_menu_Link5.type = "existing";
		nav_menu_Link5.displayName = "Phobulous&nbsp;(Noodle&nbsp;Revolution)";
		nav_menu_Link5.linkWindow = "_self";
		nav_menu_Link5.linkValue = "menu_noodlerev.html";
		nav_menu_Link5.linkIndex = "5";
		nav_menu.links[4] = nav_menu_Link5;

		var nav_menu_Link6 = new Object();
		nav_menu_Link6.type = "existing";
		nav_menu_Link6.displayName = "Grills&nbsp;-&nbsp;To&nbsp;Slurp&nbsp;or&nbsp;Not?";
		nav_menu_Link6.linkWindow = "_self";
		nav_menu_Link6.linkValue = "menu_slurp.html";
		nav_menu_Link6.linkIndex = "6";
		nav_menu.links[5] = nav_menu_Link6;

		var nav_menu_Link7 = new Object();
		nav_menu_Link7.type = "existing";
		nav_menu_Link7.displayName = "Phobulous&nbsp;Introduces";
		nav_menu_Link7.linkWindow = "_self";
		nav_menu_Link7.linkValue = "menu_newmenu.html";
		nav_menu_Link7.linkIndex = "7";
		nav_menu.links[6] = nav_menu_Link7;

		var nav_menu_Link8 = new Object();
		nav_menu_Link8.type = "existing";
		nav_menu_Link8.displayName = "Cold&nbsp;Beverages";
		nav_menu_Link8.linkWindow = "_self";
		nav_menu_Link8.linkValue = "menu_bevs.html";
		nav_menu_Link8.linkIndex = "8";
		nav_menu.links[7] = nav_menu_Link8;

		var nav_menu_Link9 = new Object();
		nav_menu_Link9.type = "existing";
		nav_menu_Link9.displayName = "Teas&nbsp;&&nbsp;Coffee";
		nav_menu_Link9.linkWindow = "_self";
		nav_menu_Link9.linkValue = "menu_coffee.html";
		nav_menu_Link9.linkIndex = "9";
		nav_menu.links[8] = nav_menu_Link9;

		var nav_menu_Link10 = new Object();
		nav_menu_Link10.type = "existing";
		nav_menu_Link10.displayName = "House&nbsp;Specialties";
		nav_menu_Link10.linkWindow = "_self";
		nav_menu_Link10.linkValue = "menu_dacbiet.html";
		nav_menu_Link10.linkIndex = "10";
		nav_menu.links[9] = nav_menu_Link10;

		




function renderTextHTML(Navigation, strTpGif)
{
	
	var strHTML = '';
		
	
	if(Navigation.border)
	{
		strHTML += '<TABLE CELLSPACING="0" BORDER="0" CELLPADDING="0">';
		strHTML += '<TR HEIGHT="2" BGCOLOR="' + Navigation.border + '"><TD HEIGHT="2" COLSPAN="3"><IMG SRC="/tp.gif" HEIGHT="2" ALT=""></TD></TR>';
		strHTML += '<TR><TD WIDTH="2" BGCOLOR="' + Navigation.border + '"><IMG SRC="/tp.gif" HEIGHT="2" ALT=""></TD><TD>';
	}
	var strBGColor = '';
	if(Navigation.background)
	{
		strBGColor = 'BGCOLOR="' + Navigation.background + '"';	
	}
	
	strHTML += '<TABLE CELLSPACING="0" CELLPADDING="0" BORDER="0" ' + strBGColor + '>';

	
	var i;
	for(i = 0; i < Navigation.links.length; i++)
	{
		strHTML += renderTextLink(Navigation, Navigation.links[i], strTpGif);	
	}

	strHTML += '</TABLE>';
		
	if(Navigation.border)
	{
		strHTML += '</TD><TD WIDTH="2" BGCOLOR="' + Navigation.border + '"><IMG SRC="/tp.gif" HEIGHT="2" ALT=""></TD></TR>';
		strHTML += '<TR HEIGHT="2" BGCOLOR="'  + Navigation.border + '"><TD HEIGHT="2" COLSPAN="3"><IMG SRC="/tp.gif" HEIGHT="2" ALT=""></TD></TR>';
		strHTML += '</TABLE>';
	}
		
	
	return strHTML;
}
 
function backgroundMouseOn(tableCell, newColor) 
{ 
	tableCell.oldBGColor = tableCell.style.backgroundColor;
	tableCell.style.backgroundColor = newColor;
}  
function backgroundMouseOff(tableCell)
{ 
	tableCell.style.backgroundColor = tableCell.oldBGColor;
}

function getTextMouseOverHandler(Navigation, bIsCurrentPage)
{
	
	if (Navigation.mouseoverEffect != 'true') return '';

	var bShowMouseoverBg = !(bIsCurrentPage && 'true' == Navigation.selectedEffect && Navigation.selectedBgcolor);
	var bShowMouseoverText = !(bIsCurrentPage && 'true' == Navigation.selectedEffect && Navigation.selectedTextcolor);

	var strMouseOver = '';
	var strMouseOut = '';
			
	if(Navigation.mouseoverBgcolor && bShowMouseoverBg)
	{
		strMouseOver += ' backgroundMouseOn(this, \'' + Navigation.mouseoverBgcolor+ '\');';
		strMouseOut += ' backgroundMouseOff(this);';
	}
	var textColor;
	var baseTextColor = Navigation.textColor;
	var bold;
	var baseBold = Navigation.bold;
	var underline;
	var baseUnderline = Navigation.underline;
	var italic;
	var baseItalic = Navigation.italic;
	if(bIsCurrentPage && 'true' == Navigation.selectedEffect)
	{
		textColor = Navigation.selectedTextcolor ? Navigation.selectedTextcolor : (Navigation.mouseoverTextColor ? Navigation.mouseoverTextcolor : Navigation.textColor);
		baseTextColor = Navigation.selectedTextcolor ? Navigation.selectedTextcolor : Navigation.textColor;
		baseBold = bold = Navigation.selectedBold;
		baseUnderline = underline = Navigation.selectedUnderline;
		baseItalic = italic = Navigation.selectedItalic;
	}
	else
	{
		textColor = Navigation.mouseoverTextcolor ? Navigation.mouseoverTextcolor : Navigation.textColor;
		bold = Navigation.mouseoverBold;
		underline = Navigation.mouseoverUnderline;
		italic = Navigation.mouseoverItalic;
	}
	strMouseOver += ' textMouseOn(this, \'' + textColor + '\', \'' + bold + '\', \'' + underline + '\', \'' + italic + '\');';
	strMouseOut += ' textMouseOff(this, \'' + baseTextColor + '\', \'' + baseBold + '\', \'' + baseUnderline + '\', \'' + baseItalic + '\');';
	
	return ' onMouseOver="' + strMouseOver + '" onMouseOut="' + strMouseOut + '"';
}

function getTextStyle(strFontColor, bold, italic, underline, bNetscape) 
{
	
	var strStyle = ' style="';

	strStyle += 'cursor: pointer; cursor: hand; '; 
	strStyle += 'color:' + strFontColor + ';';
	
	if(!bNetscape)
	{
		if (bold) strStyle += 'font-weight: bold;';
		if (italic) strStyle += 'font-style: italic;';
		if (underline) strStyle += 'text-decoration: underline;';
	}
	
	
	strStyle += '" ';
	
	return strStyle;
}

function renderTextLink(Navigation, Link, strTpGif)
{
	var strHTML = '';
	
	var bIsCurrentPage = isCurrentPage(Link);
	
	
	var strLinkValue = fixLinkValue(Link);
	
	var strFontColor = Navigation.textColor;	
	var strBGHTML = '';	
	var strGraphicName = 'ID' + Navigation.navName + Link.linkIndex;
	
	var nVerticalSpacing = Navigation.verticalSpacing;
	var nHorizontalSpacing = Navigation.horizontalSpacing;
	
	var nVertPaddingTop = Math.floor(nVerticalSpacing/2);
	var nVertPaddingBottom = Math.round(nVerticalSpacing/2);
	
	var nHorizPaddingLeft = Math.floor(nHorizontalSpacing/2);
	var nHorizPaddingRight = Math.round(nHorizontalSpacing/2);
	var bLastLink = Link.linkIndex == Navigation.numLinks;
	
	var nGeneralPadding = 10;
	var nAccentGraphicPadding = 10;
	var nAccentWidth = Navigation.imageWidth;
	var nAccentHeight = Navigation.imageHeight;

	
	if (bIsCurrentPage && 'true' == Navigation.selectedEffect) 
	{
		if(Navigation.selectedTextcolor)
		{
			strFontColor = Navigation.selectedTextcolor;
		}
		if(Navigation.selectedBgcolor)
		{
			strBGHTML += ' BGCOLOR="' + Navigation.selectedBgcolor + '" ';
		}
	} 
	
	var bBackgroundOrBorder = Navigation.border || Navigation.background;
	
	
	var bNetscape = false;
	var strAppName = navigator.appName;
	var appVer = parseFloat(navigator.appVersion);
						
	if ( (strAppName == 'Netscape') &&
		(appVer >= 4.0 && appVer < 5) ) 
	{  
		bNetscape = true;
	}		
	
	var strOnClick = getOnClick(strLinkValue, Link.linkWindow); 
	var strStyle = getTextStyle(
		strFontColor,
		((bIsCurrentPage && 'true' == Navigation.selectedEffect) ? ('true' == Navigation.selectedBold) : ('true' == Navigation.bold)),
		((bIsCurrentPage && 'true' == Navigation.selectedEffect)  ? ('true' == Navigation.selectedItalic) : ('true' == Navigation.italic)),
		((bIsCurrentPage && 'true' == Navigation.selectedEffect)  ? ('true' == Navigation.selectedUnderline) : ('true' == Navigation.underline)),
		bNetscape
	);
	var strMouseOver = getTextMouseOverHandler(Navigation, bIsCurrentPage);
	
	var strAlignment;
	if(Navigation.orientation=='vertical')
	{
		strAlignment = Navigation.justification;	
	}
	else
	{
		strAlignment = 'center';	
	}
	
	var strTextAlignment = 'ALIGN="' + strAlignment + '" ';
		
	
	var strLinkTarget = Link.linkWindow;
	if(strLinkTarget == '_self')
	{
		strLinkTarget = '_parent';
	}

	if(Navigation.orientation=='horizontal')
	{
		if((Link.linkIndex % Navigation.horizontalWrap) == 1) 
		{
			strHTML += '<TR ALIGN="CENTER" VALIGN="MIDDLE">';
			strHTML += '<TD>';
			strHTML += '<TABLE CELLSPACING="0" CELLPADDING="0" BORDER="0">';
			strHTML += '<TR>';
		}	
	}
	else
	{
		strHTML += '<TR ';
		strHTML += strBGHTML;
		
		if(!bNetscape)
		{
			strHTML += strOnClick + strStyle + strMouseOver;
		}
		
		strHTML +='>';

		if(Navigation.accentType == 'left' || Navigation.accentType=='both')
		{
			strHTML += '<TD ALIGN="CENTER" >';
			
			if(bNetscape)
			{
				strHTML += '<A TARGET="' + strLinkTarget + '" HREF="' + strLinkValue + '">';
			}
			
			if(Navigation.border!='' || Navigation.background!='')
			{
				strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="' + nGeneralPadding + '" HEIGHT="' + nAccentHeight + '" BORDER="0">';			
			}
			
			strHTML += '<IMG NAME="' + strGraphicName + '" SRC="' + Navigation.imagePath + '" HEIGHT="' + nAccentHeight + '" WIDTH="' + nAccentWidth + '" BORDER="0">';
			strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="' + nAccentGraphicPadding + '" HEIGHT="' + nAccentHeight +'" BORDER="0">';
			
			if(bNetscape)
			{
				strHTML += '</A>';
			}
			
			strHTML += '</TD>';
		}
	}
				
	strHTML += '<TD ' + strTextAlignment + ' VALIGN="MIDDLE" NOWRAP ';	
	
	
	strHTML += ' id="'+Navigation.navName+'_Link'+Link.linkIndex+'"';
	
	if(Navigation.orientation=='horizontal')
	{
		strHTML += strBGHTML;
		if(!bNetscape)
		{
			strHTML += strOnClick + strStyle + strMouseOver;
		}
	}
		
	strHTML += '>';
	
	
	if(bNetscape)
	{
		strHTML += '<A HREF="' + strLinkValue + '" TARGET="' + strLinkTarget + '">'; 
	}		
		
	if(Navigation.orientation=='vertical')
	{
		if(nVertPaddingTop > 0)
		{
			strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="1" HEIGHT="' + nVertPaddingTop + '" BORDER="0"><BR>';
		}
		
		if(Navigation.accentType=='lines' || ((Navigation.border!='' || Navigation.background!='') && Navigation.accentType!='left' && Navigation.accentType!='both'))
		{
			strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="' + nGeneralPadding + '" HEIGHT="1" BORDER="0">';
		}
	}
	else
	{
		if(bBackgroundOrBorder && nVertPaddingTop > 0)
		{
			strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="1" HEIGHT="' + nVertPaddingTop + '" BORDER="0"><BR>';
		}
		
		if( ((Link.linkIndex % Navigation.horizontalWrap) != 1 || bBackgroundOrBorder) && nHorizPaddingLeft > 0) 
		{
			strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="' + nHorizPaddingLeft + '" HEIGHT="1" BORDER="0">';
		}				

		if(Navigation.accentType=='left' || Navigation.accentType=='both')
		{
			strHTML += '<IMG NAME="' + strGraphicName + '" SRC="'+ Navigation.imagePath + '" HEIGHT="' + nAccentHeight + '" WIDTH="' + nAccentWidth + '" BORDER="0">';
			strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="' + nAccentGraphicPadding + '" HEIGHT="' + nAccentHeight + '" BORDER="0">';
		}	
	}

	
	var strFormattingStart = ''; 
	var strFormattingEnd = '';
	if (bNetscape)
	{
		if((bIsCurrentPage && 'true' == Navigation.selectedEffect) ? ('true' == Navigation.selectedItalic) : ('true' == Navigation.italic))
		{
			strFormattingStart += '<I>';
			strFormattingEnd = '</I>' + strFormattingEnd;
		}
		if((bIsCurrentPage && 'true' == Navigation.selectedEffect) ? ('true' == Navigation.selectedBold) : ('true' == Navigation.bold))
		{
			strFormattingStart += '<B>';
			strFormattingEnd = '</B>' + strFormattingEnd;
		}
	}
					
	strHTML += '<FONT';
	strHTML += ' FACE="' + Navigation.fontFace + '" ';
	strHTML += ' CLASS="' + Navigation.fontClass + '" '; 
	
	if(bNetscape)
	{
		strHTML += ' COLOR="' + strFontColor + '"';
	}
	strHTML += '>'; 
	
	strHTML += strFormattingStart + Link.displayName + strFormattingEnd;
	
	strHTML += '</FONT>';
	
	
	if(Navigation.orientation=='vertical')
	{
		if(Navigation.accentType=='lines' || (bBackgroundOrBorder && Navigation.accentType!='both' ))
		{
			strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="' + nGeneralPadding + '" HEIGHT="1" BORDER="0">';
		}
		
		if (nVertPaddingBottom > 0)
		{
			strHTML += '<BR><IMG SRC="' + strTpGif + '" WIDTH="1" HEIGHT="' + nVertPaddingBottom + '" BORDER="0">';
		}
	}
	else
	{
		if(Navigation.accentType=='both')
		{
			strHTML += '<IMG SRC="' + strTpGif + '"  WIDTH="' + nAccentGraphicPadding + '" HEIGHT="' + nAccentHeight + '" BORDER="0">';
			strHTML += '<IMG NAME="' + strGraphicName + '" SRC="' + Navigation.imagePath + '" HEIGHT="' + nAccentHeight + '" WIDTH="' + nAccentWidth + '" BORDER="0">';
		}
		
		if (((Link.linkIndex % Navigation.horizontalWrap != 0 && !bLastLink) || bBackgroundOrBorder) && nHorizPaddingRight > 0 ) 
		{
			strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="' + nHorizPaddingRight + '" HEIGHT="1" BORDER="0">';
		}
		
		if(bBackgroundOrBorder && nVertPaddingBottom > 0)
		{
			strHTML += '<BR><IMG SRC="' + strTpGif + '" WIDTH="1" HEIGHT="' + nVertPaddingBottom + '" BORDER="0">';
		}
	}
	
	
	if(bNetscape)
	{
		strHTML += '</A>';
	}	

	
	strHTML += '</TD>';
	
	if(Navigation.orientation=='vertical')
	{
		if(Navigation.accentType=='both')
		{
			strHTML += '<TD ALIGN="CENTER" >';
				
			if(bNetscape)
			{
				strHTML += '<A TARGET="' + Link.linkWindow + '" HREF="' + strLinkValue + '">';
			}
				
			
			if(bBackgroundOrBorder)
			{
				strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="' + nGeneralPadding + '" HEIGHT="' + nAccentHeight + '" BORDER="0">';
			}
			
			strHTML += '<IMG NAME="' + strGraphicName + '" SRC="' + Navigation.imagePath + '" HEIGHT="' + nAccentHeight + '" WIDTH="' + nAccentWidth + '" BORDER="0">';
			strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="' + nAccentGraphicPadding + '" HEIGHT="' + nAccentHeight +'" BORDER="0">';
			
			if(bNetscape)
			{
				strHTML += '</A>';
			}
			strHTML += '</TD>';
		}
		
		
		strHTML += '</TR>';
		
		if(Navigation.accentType=='lines')
		{
			if(!bLastLink)
			{
				strHTML += '<TR><TD HEIGHT="' + Navigation.lineWidth + '" BGCOLOR="' + Navigation.lineColor + '">';
				strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="1" HEIGHT="' + Navigation.lineWidth + '"></TD></TR>';
			}
		}
	}
	else
	{
		
		if(Navigation.accentType == 'lines')
		{		
			if(!bLastLink && ((Link.linkIndex % Navigation.horizontalWrap) != 0)) 
			{ 	
				strHTML += '<TD WIDTH="' +  Navigation.lineWidth +'" BGCOLOR="' + Navigation.lineColor +  '">';
				strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="' + Navigation.lineWidth + '"></TD>';
			}
		}
			
		
		if( ((Link.linkIndex % Navigation.horizontalWrap) == 0) || bLastLink )
		{
			strHTML += '</TR>';
			strHTML += '</TABLE>';
			strHTML += '</TD></TR>';
			
			if(!bLastLink && !bBackgroundOrBorder)
			{	
				if (nVerticalSpacing > 0)
				{
					strHTML += '<TR>';
					strHTML += '<TD>';
					strHTML += '<IMG SRC="' + strTpGif + '" WIDTH="1" HEIGHT="' + nVerticalSpacing + '" BORDER="0">';
					strHTML += '</TD></TR>';
				}
			}
		}
	}
	return strHTML;
}


		



function renderHTML(Navigation)
{
	if (navigator.userAgent.indexOf('Mozilla/3') != -1)
	{
		return 'Sorry, since you are using an old version of Netscape, you may not be able to access all the pages in this Web site.';	
	}

	if (Navigation.style == 'text')
	{
		return renderTextHTML(Navigation, '/tp.gif');
	}
	else
	{
		return renderGraphicalHTML(Navigation, '/tp.gif');
	}
}


function fixLinkValue(Link)
{
	if(Link.type!='existing')
	{
		return Link.linkValue;
	}
	else
	{
		return baseHref + strRelativePathToRoot + Link.linkValue;	
	}
}

function isCurrentPage(Link)  
{
	if(Link.type!='existing')
	{
		return false;
	}		
	var strLinkValue = Link.linkValue.toLowerCase();
	return (strRelativePagePath == strLinkValue);	
} 

function getOnClick(strLinkValue, strLinkTarget)  
{ 
	var strOnClick;
	if(strLinkTarget == '_blank')
	{
		strOnClick = 'onClick="window.open(\'' + strLinkValue + '\');"';
	}
	else
	{  
		strOnClick = 'onClick="document.location = \'' + strLinkValue + '\';"';
	}
	return strOnClick;
}  

function netscapeDivCheck()  
{  
	var strAppName = navigator.appName;
	var appVer = parseFloat(navigator.appVersion);
	if ( (strAppName == 'Netscape') &&
		(appVer >= 4.0 && appVer < 5) ) {  document.write('</DIV>');
	}
}

function textMouseOn(textObj, newColor, mouseoverBold, mouseoverUnderline, mouseoverItalic)
{ 
	if(newColor)
	{
		textObj.style.color=newColor; 
	}
	if(mouseoverBold=='true')
	{
		textObj.style.fontWeight='bold';
	}
	else
	{
		textObj.style.fontWeight='normal';
	}
	if(mouseoverUnderline=='true')
	{
		textObj.style.textDecoration='underline';
	}
	else
	{
		textObj.style.textDecoration='none';
	}
	if(mouseoverItalic=='true')
	{
		textObj.style.fontStyle='italic';
	}
	else
	{
		textObj.style.fontStyle='normal';
	}
}  

function textMouseOff(textObj, newColor, bold, underline, italic)
{ 
	textObj.style.color=newColor; 
	if(bold=='true')
	{
		textObj.style.fontWeight='bold';
	}
	else
	{
		textObj.style.fontWeight='normal';
	}
	if(underline=='true')
	{
		textObj.style.textDecoration='underline';
	}
	else
	{
		textObj.style.textDecoration='none';
	}
	if(italic=='true')
	{
		textObj.style.fontStyle='italic';
	}
	else
	{
		textObj.style.fontStyle='normal';
	}
}


		
		document.write(renderHTML(nav_menu));

