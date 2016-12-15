			elif sound.match(line) is not None:
				#print(color.OKBLUE+line.strip('\n')+color.END)
				uuid = line.replace("<SOUND:","")
                                uuid = uuid.replace(">","")
				type = fetch(ASSET_TYPE % ('SOUND'))[0]
				sql(INSERT_ASSET % (type,uuid.strip("\n"))) # SOUND
				asset_id = fetch(ASSET_ID % (uuid.strip("\n")))[0]
				sql(INSERT_ASSET_LINE % (CID,asset_id,line_number))
				line_number += 1 # Line Index + 1 IF its not the DESC line
