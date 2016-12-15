			elif texture.match(line) is not None:
				#print(color.OKBLUE+line.strip('\n')+color.END)
				uuid = line.replace("<TEXTURE:","")
				uuid = uuid.replace(">","")
				type = fetch(ASSET_TYPE % ('TEXTURE'))[0]
				sql(INSERT_ASSET % (type,uuid.strip("\n")))
				asset_id = fetch(ASSET_ID % (uuid.strip("\n")))[0]
                                sql(INSERT_ASSET_LINE % (CID,asset_id,line_number))
				line_number += 1
