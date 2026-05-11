import { YoutubeChannel } from "./Observable/YoutubeChannel.js";
import { SubscribedPerson } from "./Observer/SubscribedPerson.js";
import { AndroidDevice } from "./ObserverChannels/AndroidDevice.js";
import { Email } from "./ObserverChannels/Email.js";
import { IoSDevice } from "./ObserverChannels/IosDevice.js";

const Sidemen = new YoutubeChannel('Sidemen');
const CanadianLad = new YoutubeChannel('TheCanadianLad');
const Itzu = new YoutubeChannel('iTzu');

const Broad = new SubscribedPerson('Broad')
const Root = new SubscribedPerson('Root')
const Butler = new SubscribedPerson('Butler')

const Android = new AndroidDevice()
const Iphone = new IoSDevice()
const Gmail = new Email()

Broad.addNotificationChannels(Android)
Broad.addNotificationChannels(Gmail)
Root.addNotificationChannels(Iphone)
Root.addNotificationChannels(Android)
Butler.addNotificationChannels(Gmail)

console.log('==========================')
console.log(Broad.getName(), Broad.getNotificationChannels())
console.log(Root.getName(), Root.getNotificationChannels())
console.log(Butler.getName(), Butler.getNotificationChannels())
console.log('==========================')

Sidemen.subscribe(Broad)
Sidemen.subscribe(Butler)
Sidemen.subscribe(Root)
CanadianLad.subscribe(Broad)
CanadianLad.subscribe(Butler)
Itzu.subscribe(Root)

Sidemen.uploadVideo('2026 Charity Match')
CanadianLad.uploadVideo('DoomsDay Theory - Dr. Strange')
CanadianLad.uploadVideo('Spiderman BND - Punisher Role')
Sidemen.unsubscribe(Root)
Sidemen.uploadVideo('Cheap vs Expensive Camping')
Itzu.uploadVideo('Super Witches Strategy')
Itzu.unsubscribe(Root)
Itzu.unsubscribe(Broad)
Itzu.uploadVideo('Summer Update Sneak Peak')
Sidemen.unsubscribe(Broad)
Sidemen.uploadVideo('Try Not To Laugh IRL Challenge')