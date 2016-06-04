sudo npm install -g ionic@beta gulp cdvlive
cd /angular
mkdir hm
cd hm
ionic start hybridMessenger tabs --v2 --ts
n
cd hybridMessenger
ionic serve
localhost:8100
-- open project in ide
--new tab terminal
cordova platform add android
-- new tab terminal
cd /opt/ibm/mfp
nohup ./run.sh $
tail -f nohup.out
--new window browser
localhost:9080/mfpconsole
admin - admin
get started cod - tab
Tools
Client SDK for Mobile Application Development
Cordova
--new tab terminal
cd Downloads
unzip nfp-cordova.zip
--return tab hybridMessenger terminal
cordova plugin add -/Downloads/plugins/cordova-plugin-mfp
cordova plugin add -/Downloads/plugins/cordova-plugin-mfp-jsonstore
cordova plugin add -/Downloads/plugins/cordova-plugin-mfp-push
sudo npm install -g mfpdev-cli
mfpdev app register
cordova prepare
mfpdev app pull
mfpdev app push
--open config.xml on hybridMessenger directory - view it
gulp watch
mfpdev app preview
--edit page1 html in project
-- edit index.html file put:
<script>
	function wlCommonInit(){
		console.log('---wlCommon init called');

		var wlevent = new CustomEvent('wlInitFinished');
		console.log('---dispatching wlInitFinished event');
		document.dispatchEvent(wlevent);
	}
</script> 
-- cd hm directory
mfpdev adapter create
name: messengerAdapter
Type: HTTP
group ID: com.hybrid
