import Service from 'node-windows';

const myService = Service.Service
// Create a new service object
var svc = new myService({
  name:'Node Server',
  description: 'LOTUS API nodejs web server.',
  script: 'C:\\Users\\Philip\\source\\repos\\LotusNodeBackend\\nodeServiceDaemon.js',
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
  //, workingDirectory: '...'
  //, allowServiceLogon: true
});
svc.on('uninstall',function(){
    console.log('Uninstall complete.');
    console.log('The service exists: ',svc.exists);
  });
  svc.uninstall();