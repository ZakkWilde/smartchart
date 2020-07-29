function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZT48_16_C_SALES_BY_QUARTER_CDS/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}