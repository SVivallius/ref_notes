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
				"world_pop",
			],
			"Passwords": [
				"endtheworld",
				"knowyourteam",
				"supercalifragilisticexpialidocious",
				"thenumberone",
				"bethebest"
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
				"rocky_b",
				"d0ctor_wh0m",
				"duke_ell",
				"bassy_thecount",
				"thegreat",
				"lass_doug",
				"jamesb",
				"theshrillery",
				"purple1",
				"ada_love",
				"sammy_l_jack",
				"daurmith",
				"indie_jones",
				"diamond_dogz",
				"_3rd_3y3_grill",
				"derek_zoo",
				"d4ria",
				"rain3y",
				"corg_train",
				"free_man_morg",
				"du_boyz",
				"be_lavar",
				"king_in_yellow",
				"poitier_27",
				"youngtwokay",
				"wc_handy",
				"bobranator",
				"jack_sparrow",
				"x_mal",
				"m_c_fly",
				"d4ria",
				"theformalartist",
				"scook",
				"i_am_the_eggman"
			],
			"Unknowns": [
				"csrbot",
				"knowledgebase",
				"kb_bot",
				"turn_a_nat",
				"custbot",
				"clarence"
			],
			"Projects": [
				"H0meEntert4inment",
				"BL4Z1NGW0RLD",
				"Free_BFG",
				"qw_stop",
				"101010",
				"giant_spidr",
				"omegabyte_03.23_final_final",
				"thefloood",
				"W3rlD3NDER",
				"judgeme_nt",
				"Vy_for_russ",
				"Ap_calypse",
				"forgetme_nt",
				"tmp",
				"semordnilap.sh",
				"cpanel",
				"ragnaroxx.sh",
				"delete_me_first",
				"cloudskimmer.da7a",
				"ls_rites",
				"ende.exe",
				"dev_nul",
				"e)(ecution0r",
				"ESCHATOLOGI.EXE",
				"LUNARLANDER_01.11.bat"
			],
			"Pages": [
				"userpanel",
				"personnel",
				"empl_pages",
				"profiles",
				"p33ps",
				"__av93zk9b9",
				"public_profiles",
				"myaccount"
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
			}
		}
	)
}
