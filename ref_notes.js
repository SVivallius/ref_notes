function(context, args) // info: true
{
	if (args != null){
		if (args.info != null && args.info === true){
			let ascii = [
				"██████╗ ███████╗███████╗███╗   ██╗ ██████╗ ████████╗███████╗███████╗\n",
				"██╔══██╗██╔════╝██╔════╝████╗  ██║██╔═══██╗╚══██╔══╝██╔════╝██╔════╝\n",
				"██████╔╝█████╗  █████╗  ██╔██╗ ██║██║   ██║   ██║   █████╗  ███████╗\n",
				"██╔══██╗██╔══╝  ██╔══╝  ██║╚██╗██║██║   ██║   ██║   ██╔══╝  ╚════██║\n",
				"██║  ██║███████╗██║     ██║ ╚████║╚██████╔╝   ██║   ███████╗███████║\n",
				"╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝  ╚═══╝ ╚═════╝    ╚═╝   ╚══════╝╚══════╝"
			]
			let c = ["A","Q","S","R","r","o"]
			for (var i = 0; i < ascii.length; i++){
				ascii[i] = ascii[i]
					.replace(/█+/gi, m => "`"+c[i]+m+"`")
					.replace(/[╔╚╝╗═║]+/gi, m => "`o"+m+"`")
			}
			
			let ascii_s = ""
			for (var i = 0; i < ascii.length; i++){
				ascii_s += ascii[i]
			}

			return (
				"\n"+ ascii_s + "\n" +
				"`VWelcome to REF_NOTES.`\n" +
				"This script is meant to be pulled into your own script as subscript.\n" +
				"Upon running the script without brackets, it returns a library of many of the components of the game.\n" +
				"These include, but are not limited to:\n\n"+
				"`A* NPC company names`\n" +
				"`A* NPC Usernames`\n" +
				"`A* Navigation commands for usernames`\n" +
				"`A* Project names in NPC companies`\n" +
				"`A* And much more!`\n\n" +

				"`NOpen source at:`\n" +
				"github.com/SVivallius/ref_notes"
			)
		}
	}
	return (
		{
			"Companies": [
				"amal_robo",
				"aon",
				"archaic",
				"bluebun",
				"bunnybat_hut",
				"cli",
				"context",
				"core",
				"cyberdine",
				"empty_nest",
				"etceteraco",
				"futuretech",
				"goodfellow",
				"halperyon",
				"hivetech",
				"kill_9_1",
				"kill_bio",
				"legion_bible",
				"legion_intl",
				"light",
				"marco_polo",
				"merrymoor_pharma",
				"nation_of_wales",
				"nogrub",
				"nuutec",
				"pica",
				"protein_prevention",
				"ros13",
				"ros_13_update_checker",
				"setec_gas",
				"skimmerite",
				"sn_w",
				"soylentbean",
				"subject_object",
				"suborbital_airlines",
				"tandoori",
				"the_holy_checksum",
				"turing_testing",
				"tyrell",
				"vacuum_rescue",
				"we_ltd",
				"weathernet",
				"welsh_measles_info",
				"weyland",
				"world_pop"
			],
			"Passwords": [
				"endtheworld",
				"knowyourteam",
				"supercalifragilisticexpialidocious",
				"thenumberone",
				"bethebest",
				"plantowin"
			],
			"Employees" :{
				"Mitch": {
					"Sector": "HR"
				},
				"Lynne": {
					"Sector": "IT"
				},
				"Paolo":{
					"Sector": "Marketing"
				},
				"Sherlise": {
					"Sector": "DEVOPS"
				},
				"Jimmy": {
					"Sector": "DEVOPS"
				},
				"Sergio":{
					"Sector": "BIZDEV"
				}
			},
			"Usernames": [
				"_3rd_3y3_grill",
				"ada_love",
				"bassy_thecount",
				"be_lavar",
				"bobranator",
				"corg_train",
				"d0ctor_wh0m",
				"d4ria",
				"daurmith",
				"derek_zoo",
				"diamond_dogz",
				"du_boyz",
				"duke_ell",
				"free_man_morg",
				"i_am_the_eggman",
				"indie_jones",
				"jack_sparrow",
				"jamesb",
				"king_in_yellow",
				"lass_doug",
				"m_c_fly",
				"theshrillery",
				"poitier_27",
				"purple1",
				"rain3y",
				"rey_tr4cer",
				"rocky_b",
				"sammy_l_jack",
				"scook",
				"theformalartist",
				"thegreat",
				"there_is_enoether",
				"wc_handy",
				"x_mal",
				"youngtwokay"
			],
			"Unknowns": [
				"clarence",
				"csrbot",
				"custbot",
				"knowledgebase",
				"kb_bot",
				"turn_a_nat",
				"dsearcher"
			],
			"Projects": [
				"101010",
				"Ap_calypse",
				"BL4Z1NGW0RLD",
				"cloudskimmer.da7a",
				"cpanel",
				"delete_me_first",
				"dev_nul",
				"dsktp_mngr",
				"e)(ecution0r",
				"ende.exe",
				"ESCHATOLOGI.EXE",
				"forgetme_nt",
				"Free_BFG",
				"giant_spidr",
				"H0meEntert4inment",
				"judgeme_nt",
				"lap.sh",
				"ls_rites",
				"LUNARLANDER_01.11.bat",
				"omegabyte_03.23_final_final",
				"qw_stop",
				"ragnaroxx.sh",
				"semordnilap.sh",
				"thefloood",
				"tmp",
				"Vy_for_russ",
				"W3rlD3NDER"
			],
			"Pages": [
				"userpanel",
				"personnel",
				"empl_pages",
				"profiles",
				"p33ps",
				"__av93zk9b9",
				"public_profiles",
				"myaccount",
				"u_panel"
			],
			"Nav-Commands":[
				"navigation",
				"open",
				"nav",
				"command",
				"action",
				"see",
				"cmd",
				"entry",
				"get",
				"process",
				"show"
			],
			"Clues":[
				"v__to __'s tavern. bring the stuff",
				"CLI.public",
				"2-fortnite. amnesia. hurry",
				"sn_w_glock kz75we",
				"get dat new lock you had you eye on",
				"i need it back fro my tuition",
				"under the red full-sun. don't be late",
				"i need ur help"
			],
			"acct_nt_clues": [
				"Get me the amount of a large withdrawal near 240511.0714", //large withdrawal
				"What was the net GC between 240511.0646 and 240511.0714" //net GC
			],
			"T2-Locks":{
				"CON_SPEC": "Provide a scriptor <number>({s:<string>, d:<number>}) which returns the number of times the digit shows up in the string",
				"acct_nt": "Calculate net GC between timestamps, sometimes excluding with memos, sometimes exclusive with memos"
			},
			"NPC-fragments":{
				"prefixes":[
					"abndnd",
					"abandoned",
					"anon",
					"anonymous",
					"derelict",
					"uknown",
					"unknown",
					"unidentified"
				]
			},
			"sn_w_glock": { 
				"magician":"1K89GC", 
				"secret":"7GC", 
				"elite":"1K337GC", 
				"monolithic":"2K1GC", 
				"hunter":"3K6GC", 
				"secure":"443GC", 
				"beast":"666GC", 
				"meaning":"42GC", 
				"special":"38GC" }
		}
	)
}