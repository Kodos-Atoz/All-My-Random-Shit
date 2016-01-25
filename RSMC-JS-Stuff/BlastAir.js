importPackage(java.util);
importPackage(com.mod.guffcore.scripting);
importPackage(Packages.io.rsmc.RSMC.skill);
importPackage(Packages.io.rsmc.RSMC.player);

type = "Air";
expValue = 0;
levelReq = 0;
maxDamage = 60;

name = type + " Blast";
spellDelay = 2000;
globalDelay = 2000;
spellSize = 0.25;
speed = 0.75;

isProjectile = true;

spellIcon = "";

function getRunes(list) {
	list.add(ItemWrapper.getItemStack("RSMC:itemRune", 1, 0));
	list.add(ItemWrapper.getItemStack("RSMC:itemRune", 1, 4));
}
function getDescription(list) {
	list.add("A standard " + type + " missile");
}
function onImpactEntity(player, entity, theSpell, world) {
	if(!entity.isLiving())
		return false;
	var chance = CombatCalculator.calcMagicHitChance(player.theEntity, entity.theEntity);
	var hit = CombatCalculator.calculateShouldHit(chance);
	var dmg = 0;
	var exp = 12;
	var magic = PlayerTracker.getPlayer(player.thePlayer).getSkillList().getSkill(SkillBase.magic);
	if(hit) {
		var dmg = CombatCalculator.calculateMagicHit(player.theEntity, maxDamage + magic.getEffectiveLevel());
		exp += 0.4 * dmg;
	}
	magic.addXP(exp);
	entity.hurt(player, "magic", dmg);
	return true;
}
function populateColorMap(map) {
	map.put('#FFFFFF', 0.6);
	map.put('#C8C8C8', 0.4);
}
