from blocktype import BlockType as bt
TAB = '  '


def scene3d(width, height, length):
    return [[[bt.air for _ in range(length)] for _ in range(height)] for _ in range(width)]


def quote(blocks):
    new_blocks = ['AIR' if x is None else x for x in blocks]
    return '"' + '", "'.join(new_blocks) + '"'


def to_json(grid):
    '''
    {
        "length" : 2,
        "width"  : 3,
        "height" : 4,
        "blocks" : [
            [
                ["STONE","STONE","STONE","STONE"],
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
    res = '{\n'
    res += '%s"width" : "%d",\n' % (TAB, len(grid))
    res += '%s"length" : "%d",\n' % (TAB, len(grid[0]))
    res += '%s"height" : "%d",\n' % (TAB, len(grid[0][0]))
    res += '%s"blocks" : [\n' % TAB
    xlist = []
    for x in range(len(grid)):
        ylist = []
        for z in range(len(grid[0])):
            # TODO handle None values and ensure double quotes
            #line = '%s%s%s[ %s ]' % (TAB, TAB, TAB, ', '.join(grid[x][z]))
            line = '%s%s%s[ %s ]' % (TAB, TAB, TAB, quote(grid[x][z]))
            ylist.append(line)
        xlist.append(',\n'.join(ylist))
    res += '%s%s[\n' % (TAB, TAB)
    res += ('\n%s%s],\n%s%s[\n' % (TAB, TAB, TAB, TAB)).join(xlist)
    res += '\n%s%s]\n' % (TAB, TAB)
    
    # OK
    res += '%s]\n' % (TAB)
    res += '}'
    return res


def main():
    grid = scene3d(3, 4, 5)
    grid[0][0][0] = None
    json = to_json(grid)
    
    print(json)


if __name__ == '__main__':
    main()
