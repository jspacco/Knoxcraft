from blocktype import BlockType as bt

def to_json(grid):
    '''
     {
         "length" : 2,
         "width"  : 3,
         "height" : 4,
         "blocks" : [
             [
                 ["stone","stone","stone","stone"],
                 ["DIRT","DIRT","DIRT","DIRT"],
                 ["GRASS","GRASS","GRASS","GRASS"]
             ],
             [
                 ["AIR","AIR","AIR","AIR"],
                 ["BEDROCK","BEDROCK","BEDROCK","BEDROCK"],
                 ["GLASS","GLASS","GLASS","GLASS"]
             ]
         ]
     }
'''
    length = len(grid)
    width = len(grid[0])
    height = len(grid[0][0])
    res = '''{{
    "length" : {},
    "width" : {},
    "height" : {},
    "blocks" :
'''.format(length, width, height)
    blocks = []
    for row in grid:
        thing = []
        for col in row:
            foo = []
            for s in col:
                foo.append('"{}"'.format(s))
            thing.append('[' + ','.join(foo) + ']')
        blocks.append('[\n' + ',\n'.join(thing) + ']\n')
    res += '[\n' + ',\n'.join(blocks) + ']\n}'
    return res

# TODO: make a function that creates a grid of given sizes of None

def main():
    grid = [
    [
        [bt.stone,bt.stone,bt.stone,bt.stone],
        [bt.stone,bt.stone,bt.stone,bt.stone],
        [bt.stone,bt.stone,bt.stone,bt.stone]
    ],
    [
        [bt.stone,bt.stone,bt.stone,bt.stone],
        [bt.stone,bt.stone,bt.stone,bt.stone],
        [bt.stone,bt.stone,bt.stone,bt.stone]
    ]
]
    json = to_json(grid)
    print(json)

if __name__ == '__main__':
    main()
