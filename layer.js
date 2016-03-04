var chinaLayer = [
	{ id : "0" , parentId : "0" , layerId : "1", subId : "11" },
	{ id : "0" , parentId : "0" , layerId : "1", subId : "12" },
	{ id : "0" , parentId : "0" , layerId : "1", subId : "13" },
	{ id : "0" , parentId : "0" , layerId : "1", subId : "14" },
	{ id : "0" , parentId : "0" , layerId : "1", subId : "15" },
	{ id : "0" , parentId : "0" , layerId : "1", subId : "16" },
	{ id : "0" , parentId : "0" , layerId : "1", subId : "17" },
	{ id : "0" , parentId : "0" , layerId : "1", subId : "18" },
	{ id : "0" , parentId : "0" , layerId : "1", subId : "19" },
	{ id : "0" , parentId : "0" , layerId : "1", subId : "20" },
	{ id : "0" , parentId : "0" , layerId : "1", subId : "21" },
	{ id : "0" , parentId : "0" , layerId : "1", subId : "22" },
	{ id : "0" , parentId : "0" , layerId : "1", subId : "23" },
	{ id : "0" , parentId : "0" , layerId : "1", subId : "24" },
	{ id : "0" , parentId : "0" , layerId : "1", subId : "25" },
	{ id : "0" , parentId : "0" , layerId : "1", subId : "26" },
	{ id : "0" , parentId : "0" , layerId : "1", subId : "27" },
	{ id : "0" , parentId : "0" , layerId : "1", subId : "28" },
	{ id : "0" , parentId : "0" , layerId : "1", subId : "29" },
	{ id : "0" , parentId : "0" , layerId : "1", subId : "30" },
	{ id : "0" , parentId : "0" , layerId : "1", subId : "31" },
	{ id : "0" , parentId : "0" , layerId : "1", subId : "32" },
	{ id : "0" , parentId : "0" , layerId : "1", subId : "33" },
	{ id : "0" , parentId : "0" , layerId : "1", subId : "34" }
];

var BEJLayer = [
	{ id : "11" , parentId : "0" , layerId : "2", subId : "11001" },
	{ id : "11" , parentId : "0" , layerId : "2", subId : "11002" },
	{ id : "11" , parentId : "0" , layerId : "2", subId : "11003" },
	{ id : "11" , parentId : "0" , layerId : "2", subId : "11004" },
	{ id : "11" , parentId : "0" , layerId : "2", subId : "11005" },
	{ id : "11" , parentId : "0" , layerId : "2", subId : "11006" },
	{ id : "11" , parentId : "0" , layerId : "2", subId : "11007" },
	{ id : "11" , parentId : "0" , layerId : "2", subId : "11008" },
	{ id : "11" , parentId : "0" , layerId : "2", subId : "11009" },
	{ id : "11" , parentId : "0" , layerId : "2", subId : "11010" },
	{ id : "11" , parentId : "0" , layerId : "2", subId : "11011" },
	{ id : "11" , parentId : "0" , layerId : "2", subId : "11012" },
	{ id : "11" , parentId : "0" , layerId : "2", subId : "11013" },
	{ id : "11" , parentId : "0" , layerId : "2", subId : "11014" },
	{ id : "11" , parentId : "0" , layerId : "2", subId : "11015" },
	{ id : "11" , parentId : "0" , layerId : "2", subId : "11016" },
	{ id : "11" , parentId : "0" , layerId : "2", subId : "11017" },
	{ id : "11" , parentId : "0" , layerId : "2", subId : "11018" },
	{ id : "11" , parentId : "0" , layerId : "2", subId : "11019" },
	{ id : "11" , parentId : "0" , layerId : "2", subId : "11020" },
	{ id : "11" , parentId : "0" , layerId : "2", subId : "11021" },
	{ id : "11" , parentId : "0" , layerId : "2", subId : "11022" },
	{ id : "11" , parentId : "0" , layerId : "2", subId : "11023" },
	{ id : "11" , parentId : "0" , layerId : "2", subId : "11024" }
];

function getLayer(code){
	switch(code){
		case 'chinaLayer':
			return chinaLayer;
		case 'BEJLayer':
			return BEJLayer;
	}
}
